# monkey patch unittest2 for old python versions
try:
    import unittest2 as _unittest
except ImportError:
    pass
else:
    import sys
    sys.modules['unittest'] = _unittest
