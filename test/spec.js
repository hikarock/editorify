'use strict';

var $editor = $('#editor');

describe('insert', function () {
  describe('"hello world."が引数の場合', function () {
    it('"hello world."が挿入されること', function () {
      var text = 'hello world.',
          val = '';
      $editor.val('');
      $editor.editorify('insert', text);
      val = $editor.val();
      expect(val).to.be(text);
    });
    it('カーソルが文字列の末尾に移動すること', function () {
      var text = 'hello world.',
          pos = 0;
      $editor.val('');
      $editor.editorify('insert', text);
      pos = $editor.get(0).selectionStart;
      expect(pos).to.be(text.length);
    });
  });
});

describe('backspace', function () {
  describe('引数なしの場合', function () {
    it('左の文字が1文字削除されること', function () {
      var val = '',
          text = 'hello';
      $editor.val(text);
      $editor.get(0).selectionStart = text.length;
      $editor.editorify('backspace');
      val = $editor.val();
      expect(val).to.be('hell');
    });
  });

  describe('引数が1の場合', function () {
    it('左の文字が1文字削除されること', function () {
      var val = '',
          text = 'hello';
      $editor.val(text);
      $editor.get(0).selectionStart = text.length;
      $editor.editorify('backspace', 1);
      val = $editor.val();
      expect(val).to.be('hell');
    });
  });

  describe('引数が2の場合', function () {
    it('左の文字が2文字削除されること', function () {
      var val = '',
          text = 'hello';
      $editor.val(text);
      $editor.get(0).selectionStart = text.length;
      $editor.editorify('backspace', 2);
      val = $editor.val();
      expect(val).to.be('hel');
    });
  });
});

describe('delete', function () {

  describe('引数なしの場合', function () {
    it('右の文字が1文字削除されること', function () {
      var text = 'hello',
          val = '';
      $editor.val(text);
      $editor.get(0).selectionStart = 0;
      $editor.editorify('delete');
      val = $editor.val();
      expect(val).to.be('ello');
    });
  });

  describe('引数が1の場合', function () {
    it('右の文字が1文字削除されること', function () {
      var text = 'hello',
          val = '';
      $editor.val(text);
      $editor.get(0).selectionStart = 0;
      $editor.editorify('delete', 1);
      val = $editor.val();
      expect(val).to.be('ello');
    });
  });

  describe('引数が2の場合', function () {
    it('右の文字が2文字削除されること', function () {
      var text = 'hello',
          val = '';
      $editor.val(text);
      $editor.get(0).selectionStart = 0;
      $editor.editorify('delete', 2);
      val = $editor.val();
      expect(val).to.be('llo');
    });
  });
});

describe('start', function () {
  it('カーソルが先頭に移動すること', function () {
    var text = 'hello',
        pos = 0;
    $editor.val(text);
    $editor.editorify('start');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(0);
  });
});

describe('end', function () {
  it('カーソルが末尾に移動すること', function () {
    var text = 'hello',
        pos = 0;
    $editor.val(text);
    $editor.editorify('end');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(5);
  });
});

describe('bol', function () {
  it('カーソルが現在行の先頭に移動すること', function () {
    var text = 'hello\r\nworld',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = text.length;
    $editor.editorify('bol');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(6);
  });
});

describe('eol', function () {
  it('カーソルが現在行の末尾に移動すること', function () {
    var text = 'hello\r\nworld',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = 0;
    $editor.editorify('eol');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(5);
  });
});

describe('left', function () {
  describe('引数なしの場合', function () {
    it('カーソルが左に1文字移動すること', function () {
      var text = 'hello world',
          pos = 0;
      $editor.val(text);
      $editor.get(0).selectionStart = 5;
      $editor.editorify('left');
      pos = $editor.get(0).selectionStart;
      expect(pos).to.be(4);
    });
  });

  describe('引数が2の場合', function () {
    it('カーソルが左に2文字移動すること', function () {
      var text = 'hello world',
          pos = 0;
      $editor.val(text);
      $editor.get(0).selectionStart = 5;
      $editor.editorify('left', 2);
      pos = $editor.get(0).selectionStart;
      expect(pos).to.be(3);
    });
  });
});

describe('right', function () {
  describe('引数なしの場合', function () {
    it('カーソルが右に1文字移動すること', function () {
      var text = 'hello world',
          pos = 0;
      $editor.val(text);
      $editor.get(0).selectionStart = 5;
      $editor.editorify('right');
      pos = $editor.get(0).selectionStart;
      expect(pos).to.be(6);
    });
  });

  describe('引数が2の場合', function () {
    it('カーソルが右に2文字移動すること', function () {
      var text = 'hello world',
          pos = 0;
      $editor.val(text);
      $editor.get(0).selectionStart = 5;
      $editor.editorify('right', 2);
      pos = $editor.get(0).selectionStart;
      expect(pos).to.be(7);
    });
  });
});

describe('select', function () {
  describe('"hello world."の7-11文字目を選択した時', function () {
    it('選択範囲の最初の位置が6文字目であること', function () {
      var text = 'hello world.',
          start = 0;
      $editor.val(text);
      $editor.get(0).selectionStart = 0;
      $editor.editorify('select', 7, 11);
      start = $editor.get(0).selectionStart;
      expect(start).to.be(6);
    });
    it('選択範囲の最後の位置が12文字目であること', function () {
      var text = 'hello world.',
          end = 0;
      $editor.val(text);
      $editor.get(0).selectionStart = 0;
      $editor.editorify('select', 7, 11);
      end = $editor.get(0).selectionEnd;
      expect(end).to.be(12);
    });
    it('選択されている文字列が"world"であること', function () {
      var text = 'hello world',
          start = 0,
          end = 0,
          selection = '';
      $editor.val(text);
      $editor.get(0).selectionStart = 0;
      $editor.editorify('select', 7, 11);
      start = $editor.get(0).selectionStart;
      end = $editor.get(0).selectionEnd;
      selection = $editor.val().substring(start, end);
      expect(selection).to.be('world');
    });
  });
});

describe('clear', function () {
  it('文字が全て消えて空になること', function () {
    var text = 'hello world',
        val = '';
    $editor.val(text);
    $editor.editorify('clear');
    val = $editor.val();
    expect(val).to.be('');
  });
});

describe('clear', function () {
  it('改行が挿入されること', function () {
    var val = '',
        cr = $editor.val('\r\n').val();
    $editor.val('').editorify('cr');
    val = $editor.val();
    expect(val).to.be(cr);
  });
});

describe('array paramater', function () {
  it('配列を引数にすると順番にtextarea操作が行われること', function () {
    var val = '';
    $editor.val('').editorify([
      ['insert', 'hello world'],
      ['left', 7],
      ['delete', 1]
    ]);
    val = $editor.val();
    expect(val).to.be('hell world');
  });

  it('メソッドチェーンと組み合わせてtextarea操作が動作すること', function () {
    var val = '';
    $editor.val('').editorify([
      ['insert', 'hello world'],
      ['left', 7],
      ['delete', 1]
    ])
    .editorify('insert', '0')
    .editorify('delete', 1);
    val = $editor.val();
    expect(val).to.be('hell0world');
  });
});
