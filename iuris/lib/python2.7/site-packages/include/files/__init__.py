"""
Load modules from files
"""
from __future__ import absolute_import
from .. import mount

IMPORT_PATH = mount.DEFAULT_MOUNT_LOADER.name2mount(__name__)


def install():
    import sys
    from . import import_hook
    from .. import _IMPORT_HOOKS
    if IMPORT_PATH in _IMPORT_HOOKS:
        return
    hook = _IMPORT_HOOKS[IMPORT_PATH] = import_hook.FilePathLoader(IMPORT_PATH)
    sys.meta_path.insert(sys.meta_path.index(mount.DEFAULT_MOUNT_LOADER), hook)
