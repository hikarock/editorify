```text
             _    .                   ,__
   ___    ___/ ` _/_     __.  .___  ` /  ` ,    .
 .'   `  /   | |  |    .'   \ /   \ | |__  |    `
 |----' ,'   | |  |    |    | |   ' | |    |    |
 `.___, `___,' /  \__/  `._.' /     / |     `---|.
             `                        /     \___/
```

# editorify

## Overview

`<textarea>`の中をいい感じに操るライブラリ。

## DEMO

[DEMO]()

## Usage

```html
<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="jquery.editorify.min.js"></script>
```

```javascript
$('.editor')
  .editorify('clear')
  .editorify('insert', '[](http://example.com)')
  .editorify('start')
  .editorify('right', 1)
  .editorify('insert', 'Yo');
```

## Install

```bash
$ bower install editorify
```

## Licence

MIT

## Author

[hikarock](https://github.com/hikarock)

