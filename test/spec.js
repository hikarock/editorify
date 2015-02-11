describe('editorify', function () {

  var $editor = $('#editor');

  it('insert', function () {
    var val = '',
        text = 'hello world.';
    $editor.val('');
    $editor.editorify('insert', text);
    val = $editor.val();
    expect(val).to.be(text);
  });

  it('backspace 1', function () {
    var val = '',
        text = 'hello';
    $editor.val(text);
    $editor.get(0).selectionStart = text.length;
    $editor.editorify('backspace', 1);
    val = $editor.val();
    expect(val).to.be('hell');
  });

  it('backspace 2', function () {
    var val = '',
        text = 'hello';
    $editor.val(text);
    $editor.get(0).selectionStart = text.length;
    $editor.editorify('backspace', 2);
    val = $editor.val();
    expect(val).to.be('hel');
  });

  it('delete 1', function () {
    var text = 'hello',
        val = '';
    $editor.val(text);
    $editor.get(0).selectionStart = 0;
    $editor.editorify('delete', 1);
    val = $editor.val();
    expect(val).to.be('ello');
  });

  it('delete 2', function () {
    var text = 'hello',
        val = '';
    $editor.val(text);
    $editor.get(0).selectionStart = 0;
    $editor.editorify('delete', 2);
    val = $editor.val();
    expect(val).to.be('llo');
  });

  it('start', function () {
    var text = 'hello',
        val = '', pos;
    $editor.val(text);
    $editor.editorify('start');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(0);
  });

  it('end', function () {
    var text = 'hello',
        val = '',
        pos = 0;
    $editor.val(text);
    $editor.editorify('end');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(5);
  });

  it('bol', function () {
    var text = 'hello\r\nworld',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = text.length;
    $editor.editorify('bol');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(6);
  });

  it('eol', function () {
    var text = 'hello\r\nworld',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = 0;
    $editor.editorify('eol');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(5);
  });

  it('left 1', function () {
    var text = 'hello world',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = 5;
    $editor.editorify('left');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(4);
  });

  it('left 2', function () {
    var text = 'hello world',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = 5;
    $editor.editorify('left', 2);
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(3);
  });

  it('right 1', function () {
    var text = 'hello world',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = 5;
    $editor.editorify('right');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(6);
  });

  it('right 2', function () {
    var text = 'hello world',
        pos = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = 5;
    $editor.editorify('right', 2);
    pos = $editor.get(0).selectionStart;
    expect(pos).to.be(7);
  });

  it('select', function () {
    var text = 'hello world',
        start = 0,
        end = 0;
    $editor.val(text);
    $editor.get(0).selectionStart = 0;
    $editor.editorify('select', 2, 4);
    start = $editor.get(0).selectionStart;
    end = $editor.get(0).selectionEnd;
    expect(start).to.be(2);
    expect(end).to.be(5);
  });

  it('clear', function () {
    var text = 'hello world',
        val = '';
    $editor.val(text);
    $editor.editorify('clear');
    val = $editor.val();
    expect(val).to.be('');
  });

  it('cr', function () {
    var val = '',
        cr = $editor.val('\r\n').val();
    $editor.val('').editorify('cr');
    val = $editor.val();
    expect(val).to.be(cr);
  });
});
