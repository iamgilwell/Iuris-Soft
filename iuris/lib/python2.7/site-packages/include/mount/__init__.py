import sys


class MountLoader(object):
    def __init__(self, mount_prefix, module_prefix):
        self.mount_prefix = mount_prefix
        self.module_prefix = module_prefix

    def load_module(self, name):
        """Load and return a module"""
        if name in sys.modules:
            return sys.modules[name]
        # load the actual import hook module
        module_name = self.mount2name(name)
        __import__(module_name)
        # alias the import hook module to the mount, so both can be used interchangeably
        module = sys.modules[name] = sys.modules[module_name]
        module.install()
        return module

    def find_module(self, name, path=None):
        if name.startswith(self.mount_prefix) and name.count('.') - self.mount_prefix.count('.') == 1:
            return self
        return None

    def is_module(self, name):
        """Test that `name` is a module name"""
        if self.module_prefix.startswith(self.mount_prefix):
            return name.startswith(self.module_prefix)
        return name.startswith(self.module_prefix) and not name.startswith(self.mount_prefix)

    def is_mount(self, name):
        """Test that `name` is a mount name"""
        if self.mount_prefix.startswith(self.module_prefix):
            return name.startswith(self.mount_prefix)
        return name.startswith(self.mount_prefix) and not name.startswith(self.module_prefix)

    def name2mount(self, name):
        """Convert a module name to a mount name"""
        if not self.is_module(name):
            raise ValueError('%r is not a supported module name' % (name, ))
        return name.replace(self.module_prefix, self.mount_prefix)

    def mount2name(self, mount):
        """Convert a mount name to a module name"""
        if not self.is_mount(mount):
            raise ValueError('%r is not a supported mount name' % (mount,))
        return mount.replace(self.mount_prefix, self.module_prefix)


DEFAULT_MOUNT_LOADER = MountLoader(mount_prefix=__name__, module_prefix=__name__.split('.', 1)[0])
sys.meta_path.append(DEFAULT_MOUNT_LOADER)
