import sys
import imp
import zlib
import base64
import tempfile

from ..base import import_hook


class EncodedModuleLoader(import_hook.BaseIncludeLoader):
    """
    Load python modules from their encoded content

    This import hook allows storing and using module content as a compressed
    data blob.
    """
    def module2uri(self, module_name):
        """Convert an encoded module name to an unencoded source uri"""
        encoded_str = super(EncodedModuleLoader, self).module2uri(module_name)
        encoded = encoded_str.encode('ASCII')
        compressed = base64.b64decode(encoded, b'+&')
        return zlib.decompress(compressed)

    def uri2module(self, uri):
        """Convert an unencoded source uri to an encoded module name"""
        # uri is the source code of the module
        compressed = zlib.compress(uri)
        encoded = base64.b64encode(compressed, b'+&')
        encoded_str = encoded.decode('ASCII')
        return super(EncodedModuleLoader, self).uri2module(encoded_str)

    def load_module(self, name):
        """
        Load and return a module

        Always returns the corresponding module. If the module is already
        loaded, the existing module is returned.
        """
        if name in sys.modules:
            return sys.modules[name]
        module_source = self.module2uri(name)
        module_container = tempfile.NamedTemporaryFile(suffix='.py', delete=False)
        with module_container:
            module_container.write(module_source)
            module_container.file.seek(0)
            module = imp.load_module(name, module_container.file, module_container.name, ('.py', 'U', imp.PY_SOURCE))
        module.__source__ = module_container
        module.__loader__ = self
        sys.modules[name] = module
        return module
