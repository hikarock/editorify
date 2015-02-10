/* =====================================
 * editorify v1.0.1
 * https://github.com/hikarock/editorify
 * =====================================
 * Copyright 2015 hikarock.
 * Licensed under MIT
 * ===================================== */

(function ($) {

  'use strict';

  var _getCursorPosition = function (el) {
    return el.selectionStart;
  },

  _setCursorPosition = function(el, pos) {
    el.setSelectionRange(pos, pos);
    el.focus();
  },

  _setSelectionRange = function(el, begin, end) {
    el.setSelectionRange(begin, end);
    el.focus();
  },

  _crlf = $('<textarea>').text('\r\n').val(),

  _opts,

  methods = {

    init : function(options) {
      _opts = $.extend({}, $.fn.editorify.defaults, options);
    },

    /*
     * カーソル位置に指定した文字列を入力する。
     * 文字列を選択している場合は置換する。
     */
    insert: function(text) {
      return this.each(function () {
        var start = this.selectionStart,
            end = this.selectionEnd,
            scrollTop  = this.scrollTop;
        this.value = this.value.substring(0, start) + text +
                     this.value.substring(end, this.value.length);
        this.selectionStart = start + text.length;
        this.selectionEnd   = start + text.length;
        this.scrollTop      = scrollTop;
      });
    },

    /*
     * カーソル位置から左を指定文字数分削除する。
     */
    backspace: function (len) {
      return this.each(function () {
        len = len || 1;
        var pos = _getCursorPosition(this);
        this.value = this.value.substr(0, pos - len) + this.value.substr(pos);
        _setCursorPosition(this, pos - len);
      });
    },

    /*
     * カーソル位置の右側を指定した長さ分削除する。
     */
    delete: function (len) {
      return this.each(function () {
        len = len || 1;
        var pos = _getCursorPosition(this);
        this.value = this.value.substr(0, pos) + this.value.substr(pos + len);
        _setCursorPosition(this, pos + len - 1);
      });
    },

    /*
     * カーソルを左に移動する。
     */
    left: function (len) {
      len = len || 1;
      return this.each(function () {
        var pos = _getCursorPosition(this) - len;
        _setCursorPosition(this, pos);
      });
    },

    /*
     * カーソルを右に移動する。
     */
    right: function (len) {
      len = len || 1;
      return this.each(function () {
        var pos = _getCursorPosition(this) + len;
        _setCursorPosition(this, pos);
      });
    },

    /*
     * 文頭にカーソルを移動する。
     */
    start: function () {
      return this.each(function () {
        _setCursorPosition(this, 0);
      });
    },

    /*
     * 文末にカーソルを移動する。
     */
    end: function () {
      return this.each(function () {
        _setCursorPosition(this, this.value.length);
      });
    },

    /*
     * 現在行の行頭にカーソルを移動する。
     */
    bol: function () {
      return this.each(function () {
        var pos = _getCursorPosition(this) - 1;
        pos = this.value.lastIndexOf(_crlf, pos) + 1;
        _setCursorPosition(this, pos);
      });
    },

    /*
     * 現在行の行末にカーソルを移動する。
     */
    eol: function () {
      return this.each(function () {
        var pos = _getCursorPosition(this);
        pos = this.value.indexOf(_crlf, pos);
        _setCursorPosition(this, pos);
      });
    },

    /*
     * 指定した範囲を選択する。
     */
    select: function (begin, end) {
      return this.each(function () {
        _setSelectionRange(this, begin, end + 1);
      });
    },

    /*
     * 全体をクリアする。
     */
    clear: function () {
      return this.each(function () {
        this.value = '';
        this.focus();
      });
    },

    /*
     * 改行を挿入する。
     */
    cr: function () {
      var that = this;
      return this.each(function () {
        methods.insert.call(that, _crlf);
      });
    }
  };

  $.fn.editorify = function (methodOrOpts) {
    if (methods[methodOrOpts]) {
      return methods[methodOrOpts].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof methodOrOpts === 'object' || !methodOrOpts) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  methodOrOpts + ' does not exist on jQuery.editorify');
    }
  };

  $.fn.editorify.defaults = {};

  _opts = $.fn.editorify.defaults;

})(jQuery);

