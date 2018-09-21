"""
Base module for import hook modules

Each include type is backed by (at least) one import hook module.
This must implement the :py:func:`~.install` to explicitly enable the include type.
Importing the import hook module should be free of side-effects, allowing modification before installation.

Notably, imported modules should live in a *separate* packagae than the import hook module.
This separate package, preferably :py:mod:`include.mount`, is free to bootstrap the import hook module as needed.
"""
from __future__ import absolute_import
from .. import mount

#: package name in which to include imported modules
IMPORT_PATH = mount.DEFAULT_MOUNT_LOADER.name2mount(__name__)


def install():
    """Enable this type of include"""
    pass
