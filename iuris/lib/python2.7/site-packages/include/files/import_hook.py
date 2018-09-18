import os
import sys
import imp

from ..base import import_hook


class FilePathLoader(import_hook.BaseIncludeLoader):
    """
    Load python file from their path

    This import hook allows using encoded paths as module names to load modules
    directly from their file.
    """
    def load_module(self, name):
        """
        Load and return a module

        Always returns the corresponding module. If the module is already
        loaded, the existing module is returned.
        """
        if name in sys.modules:
            return sys.modules[name]
        path = self.module2uri(name)
        if os.path.isfile(path):
            return self._load_module(name, path)
        elif os.path.isdir(path):
            return self._load_package(name, path)
        else:
            raise ImportError("Missing module source file %r" % path)

    def _load_module(self, name, path):
        module = imp.load_source(name, path)
        module.__loader__ = self
        sys.modules[name] = module
        return module

    def _load_package(self, name, path):
        # regular package with content
        init_path = os.path.join(path, '__init__.py')
        if os.path.exists(init_path):
            module = imp.load_source(name, init_path)
        # Py3 namespace package
        elif os.path.isdir(path):
            module = imp.new_module(name)
        else:
            raise ImportError("Missing package source directory %r" % path)
        module.__loader__ = self
        sys.modules[name] = module
        return module
