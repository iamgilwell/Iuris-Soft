from __future__ import absolute_import
import sys
import weakref

# weak reference to installed hooks
_IMPORT_HOOKS = weakref.WeakValueDictionary()
# must have _IMPORT_HOOKS to bootstrap hook disabling
from .inhibit import DISABLED_TYPES


def path(file_path):
    """
    Include module code from a file identified by its path

    :param file_path: path to a file containing module code
    :type file_path: str
    :return: the imported module
    :rtype: module

    Comparable to ``execfile``, but respects the rules and constraints of modules.
    If invoked again with the same ``file_path``, the same module is returned.

    .. code:: python

       import include
       my_config = include.path('/etc/sysconfig/app_conf.py')
    """
    from . import files
    return _import_url(module_url=file_path, include_type=files)


def source(source_code):
    """
    Include module code directly from a string

    :param source_code: source code of the module
    :type source_code: str
    :return: the imported module
    :rtype: module

    Comparable to ``exec`` in a separate ``globals`` namespace, but respects the rules and constraints of modules.
    If invoked again with the same ``source_code``, the same module is returned.

    .. code:: python

       >>> import include
       >>> my_module = include.source(
       >>> \"\"\"
       ... def foo():
       ...      return {constant}
       ... \"\"\".format(constant=3))
       >>> my_module.foo() == 3
       True
    """
    from . import encoded
    return _import_url(module_url=source_code, include_type=encoded)


def _import_url(module_url, include_type):
    if include_type.IMPORT_PATH not in _IMPORT_HOOKS:
        include_type.install()
    import_hook = _IMPORT_HOOKS[include_type.IMPORT_PATH]
    module_path = import_hook.uri2module(module_url)
    __import__(module_path)
    return sys.modules[module_path]


def disable(identifier, children_only=False):
    """
    Disable an include type

    :param identifier: module or name of the include type
    :param children_only: disable the include type only for child processes, not the current process

    The ``identifier`` can be specified in multiple ways to disable an include type.
    See :py:meth:`~.DisabledIncludeTypes.disable` for details.
    """
    DISABLED_TYPES.disable(identifier=identifier, children_only=children_only)


def enable(identifier, exclude_children=False):
    """
    Enable a previously disabled include type

    :param identifier: module or name of the include type
    :param exclude_children: disable the include type only for child processes, not the current process

    The ``identifier`` can be specified in multiple ways to disable an include type.
    See :py:meth:`~.DisabledIncludeTypes.disable` for details.
    """
    DISABLED_TYPES.enable(identifier=identifier, exclude_children=exclude_children)
