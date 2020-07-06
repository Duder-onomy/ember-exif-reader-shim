*DEPRECATED* ember-exif-reader-shim
==============================================================================

Use [`ember-auto-import`](https://github.com/ef4/ember-auto-import) instead. 

Once you have ember-auto-import installed
* install [ExifReader](https://github.com/mattiasw/ExifReader) directly
* use it like: `import ExifReader from 'ExifReader';`


==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/Duder-onomy/ember-exif-reader-shim.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/Duder-onomy/ember-exif-reader-shim.svg?branch=master)](https://travis-ci.org/Duder-onomy/ember-exif-reader-shim)

[![npm version](https://badge.fury.io/js/ember-exif-reader-shim.svg)](https://badge.fury.io/js/ember-exif-reader-shim)

This shims [ExifReader](https://github.com/mattiasw/ExifReader).

This shim will not load ExifReader during fastboot.


Installation
------------------------------------------------------------------------------

```
ember install ember-exif-reader-shim
```

Usage
------------------------------------------------------------------------------

```javascript
import exifreader from 'exifreader';
```

Follow the docs [here](https://github.com/mattiasw/ExifReader).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
