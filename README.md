```text
 ____  ____  ____  ____  ____  ____  ____  ____  ____
||e ||||d ||||i ||||t ||||o ||||r ||||i ||||f ||||y ||
||__||||__||||__||||__||||__||||__||||__||||__||||__||
|/__\||/__\||/__\||/__\||/__\||/__\||/__\||/__\||/__\|
```

# editorify

![](https://circleci.com/gh/hikarock/editorify.svg?style=shield&circle-token=c7c2d74f61100be974f6baae830f4c7395d92490)

## Overview

`<textarea>`の中をいい感じに操るライブラリ。

## DEMO

[DEMO](https://dl.dropboxusercontent.com/u/459142/editorify/index.html)

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
  .editorify('insert', 'Yo'); // [Yo](http://example.com)
```

## Install

```bash
$ bower install editorify
```

## Licence

MIT

## Author

[hikarock](https://github.com/hikarock)

