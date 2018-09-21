from __future__ import absolute_import
import os
import sys
import collections
import types

from . import mount
from .base import import_hook


_string_types = type(''), type(u'')


class DisabledIncludeTypes(object):
    """
    Interface for disabling include types

    Meta-container to control disabled include types.
    The methods :py:meth:`disable` and :py:meth:`enable` allow to control which include types can be used.

    Disabled types cannot be used to import code, be it explicitly or implicitly via bootstrapping.
    Once a type is disabled, attempts to import code with it raise :py:exc:`DisabledIncludeError`.

    This is provided as a two-level filter:
    each type can be disabled either for both the current and any child process, or only for child processes.
    It is not possible to enable an include type for child processes but not the current process.
    Note that child processes inherit disabled types only on startup.

    :note: This is a singleton, as it controls interpreter state.
    """
    _singleton_instance = None
    #: Key of the environment storing include types disabled for child processes
    environment_key = 'PY_INCLUDE_DISABLE'

    def __new__(cls):
        if cls._singleton_instance is not None:
            return cls._singleton_instance
        self = cls._singleton_instance = collections.MutableSet.__new__(cls)
        self._disabled = set(
            self._identifier2import_path(identifier.strip())
            for identifier in os.environ.get(self.environment_key, '').split(',')
            if identifier
        )
        for import_path in self._disabled:
            self._disable_path(import_path)
        self._children_disabled = self._disabled.copy()
        self._write_child_disabled()
        return self

    def __contains__(self, item):
        return item in self._disabled

    def __iter__(self):
        return iter(self._disabled)

    def __len__(self):
        return len(self._disabled)

    def __repr__(self):
        return '<%s.%s for %r, children %r>' % (
            self.__class__.__module__, self.__class__.__name__,
            ','.join(self._disabled),
            ','.join(self._children_disabled - self._disabled)
        )

    def disable(self, identifier, children_only=False):
        """
        Disable an include type

        :param identifier: module or name of the include type
        :param children_only: disable the include type only for child processes, not the current process

        The ``identifier`` can be specified in multiple ways to disable an include type:

        **module** (``include.files`` or ``include.mount.files``)
            The base module implementing the include type.
            These modules have a ``module.IMPORT_PATH`` attribute.

        **implementation path** (``"include.files"``)
            Import path of the module implementing the include type.

        **mount path** (``"include.mount.files"``)
            Mount path of the module implementing the include type.

        **short path** (``"files"``)
            Relative path of the module implementing the include type.
        """
        import_path = self._identifier2import_path(identifier=identifier)
        if not children_only and import_path not in self._disabled:
            self._disable_path(import_path)
            self._disabled.add(import_path)
        if import_path not in self._children_disabled:
            self._children_disabled.add(import_path)
            self._write_child_disabled()

    def enable(self, identifier, exclude_children=False):
        """
        Enable a previously disabled include type

        :param identifier: module or name of the include type
        :param exclude_children: disable the include type only for child processes, not the current process

        The ``identifier`` can be specified in multiple ways to disable an include type.
        See :py:meth:`~.DisabledIncludeTypes.disable` for details.
        """
        import_path = self._identifier2import_path(identifier=identifier)
        if import_path in self._disabled:
            self._enable_path(import_path)
            self._disabled.remove(import_path)
        if not exclude_children and import_path in self._children_disabled:
            self._children_disabled.remove(import_path)
            self._write_child_disabled()

    def _write_child_disabled(self):
        os.environ[self.environment_key] = ','.join(self._children_disabled)

    @staticmethod
    def _disable_path(import_path):
        from . import _IMPORT_HOOKS
        if import_path in _IMPORT_HOOKS:
            sys.meta_path.remove(_IMPORT_HOOKS[import_path])
        _IMPORT_HOOKS[import_path] = _disabled_loader = DisabledTypeLoader(import_path)
        sys.meta_path.insert(sys.meta_path.index(mount.DEFAULT_MOUNT_LOADER), _disabled_loader)

    @staticmethod
    def _enable_path(import_path):
        from . import _IMPORT_HOOKS
        _disabled_loader = _IMPORT_HOOKS.pop(import_path)
        sys.meta_path.remove(_disabled_loader)

    # Translation of short identifiers to import module paths
    def _identifier2import_path(self, identifier):
        if isinstance(identifier, types.ModuleType):
            return self._module_identifier2import_path(identifier)
        elif isinstance(identifier, _string_types):
            return self._string_identifier2import_path(identifier)
        else:
            raise TypeError('a name, mount name, short name or module of an import hook is required')

    @staticmethod
    def _module_identifier2import_path(module):
        try:
            return module.IMPORT_PATH
        except AttributeError:
            raise ValueError('module %r is not an import hook module' % module.__name__)  # no module.IMPORT_PATH

    def _string_identifier2import_path(self, identifier):
        try:
            # identifier is an import hook module name?
            identifier = mount.DEFAULT_MOUNT_LOADER.name2mount(identifier)
        except ValueError:
            try:
                # identifier is already a mount module name?
                mount.DEFAULT_MOUNT_LOADER.mount2name(identifier)
            except ValueError:
                # identifier is an import hook module *short* name?
                _module_name = '%s.%s' % (__name__.split('.', 1)[0], identifier)
                try:
                    __import__(_module_name)
                except ImportError:
                    raise ValueError(
                        'identifier %r cannot be resolved to an import hook module' %\
                        identifier  # expect 'include.<type>', 'include.mount.<type>' or '<type>'
                    )
                else:
                    return self._module_identifier2import_path(sys.modules[_module_name])
        return identifier


class DisabledIncludeError(ImportError):
    """An import operation failed due to its include type being disabled"""
    pass


class DisabledTypeLoader(import_hook.BaseIncludeLoader):
    def uri2module(self, uri):
        """
        Convert an unencoded source uri to an encoded module name

        Always raises :py:exc:`DisabledIncludeError`.
        """
        raise DisabledIncludeError('Include type %r disabled' % self._module_prefix)

    def load_module(self, name):
        """
        Load and return a module

        If the module is already loaded, the existing module is returned.
        Otherwise, raises :py:exc:`DisabledIncludeError`.
        """
        # allow reload noop
        if name in sys.modules:
            return sys.modules[name]
        raise DisabledIncludeError('Include type %r disabled, cannot import module %r' % (self._module_prefix, name))


#: Default interface to disabled types, see :py:class:`DisabledIncludeTypes`
DISABLED_TYPES = DisabledIncludeTypes()
