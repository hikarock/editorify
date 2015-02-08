var expect = chai.expect;

describe('editorify', function () {

  it('insert', function () {
    var $editor = $('<textarea>'),
        val = '',
        text = 'hello world.';
    $editor.editorify('insert', text);
    val = $editor.val();
    expect(val).to.equal(text);
  });

  it('backspace 1', function () {
    var val = '',
        text = 'hello',
        $editor = $('<textarea>').text(text);
    $editor.get(0).selectionStart = text.length;
    $editor.editorify('backspace', 1);
    val = $editor.val();
    expect(val).to.equal('hell');
  });

  it('backspace 2', function () {
    var val = '',
        text = 'hello',
        $editor = $('<textarea>').text(text);
    $editor.get(0).selectionStart = text.length;
    $editor.editorify('backspace', 2);
    val = $editor.val();
    expect(val).to.equal('hel');
  });

  it('delete 1', function () {
    var $editor = $('<textarea>').val('hello'),
        val = '';
    $editor.get(0).selectionStart = 0;
    $editor.editorify('delete', 1);
    val = $editor.val();
    expect(val).to.equal('ello');
  });

  it('delete 2', function () {
    var $editor = $('<textarea>').val('hello'),
        val = '';
    $editor.get(0).selectionStart = 0;
    $editor.editorify('delete', 2);
    val = $editor.val();
    expect(val).to.equal('llo');
  });

  it('start', function () {
    var $editor = $('<textarea>').val('hello'),
        pos = 0;
    $editor.editorify('start');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(0);
  });

  it('end', function () {
    var $editor = $('<textarea>').val('hello'),
        pos = 0;
    $editor.editorify('end');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(5);
  });

  it('bol', function () {
    var text = 'hello\r\nworld',
        $editor = $('<textarea>').text(text),
        pos = 0;
    $editor.get(0).selectionStart = text.length;
    $editor.editorify('bol');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(6);
  });

  it('eol', function () {
    var $editor = $('<textarea>').text('hello\r\nworld'),
        pos = 0;
    $editor.get(0).selectionStart = 0;
    $editor.editorify('eol');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(5);
  });

  it('left 1', function () {
    var $editor = $('<textarea>').text('hello world'),
        pos = 0;
    $editor.get(0).selectionStart = 5;
    $editor.editorify('left');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(4);
  });

  it('left 2', function () {
    var $editor = $('<textarea>').text('hello world'),
        pos = 0;
    $editor.get(0).selectionStart = 5;
    $editor.editorify('left', 2);
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(3);
  });

  it('right 1', function () {
    var $editor = $('<textarea>').text('hello world'),
        pos = 0;
    $editor.get(0).selectionStart = 5;
    $editor.editorify('right');
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(6);
  });

  it('right 2', function () {
    var $editor = $('<textarea>').text('hello world'),
        pos = 0;
    $editor.get(0).selectionStart = 5;
    $editor.editorify('right', 2);
    pos = $editor.get(0).selectionStart;
    expect(pos).to.equal(7);
  });

  it('select', function () {
    var $editor = $('<textarea>').text('hello world'),
        start = 0,
        end = 0;
    $editor.get(0).selectionStart = 0;
    $editor.editorify('select', 2, 4);
    start = $editor.get(0).selectionStart;
    end = $editor.get(0).selectionEnd;
    expect(start).to.equal(2);
    expect(end).to.equal(5);
  });

  it('clear', function () {
    var $editor = $('<textarea>').text('hello world'),
        val = '';
    $editor.editorify('clear');
    val = $editor.val();
    expect(val).to.equal('');
  });

  it('cr', function () {
    var $editor = $('<textarea>'),
        val = '',
        cr = $('<textarea>').text('\r\n').val();
    $editor.editorify('cr');
    val = $editor.val();
    expect(val).to.equal(cr);
  });
});
