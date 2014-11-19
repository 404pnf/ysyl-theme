// jslint参考： http://www.jslint.com/lint.html#options .
// nomen means Tolerate dangling _ in identifiers.
/*jslint browser: true, nomen: true*/
/*global _, $, console*/

var YSYL = {};

YSYL.debug = true;

(function () {
  'use strict';

  // ----
  // ## 一些帮助函数
  var note, redirectURL;
  note = function (msg) {
    if (YSYL.debug) {
      return console === undefined && console !== null ? console.log(msg) : undefined;
    }
  };
  redirectURL = function (url) {
    window.location.replace(url);
  };

  // ----
  // ## 处理选书页面的函数
  YSYL.xuanshu = function () {

    var hideTaskAssign, showTaskAssign, addBooks, tianjiaBooks;

    // ### 隐藏和显示相应区块
    // 开始的时候，用户没有选择任何书。
    // 隐藏con_box1区块，显示 no_book区块。
    hideTaskAssign = function () {
      $('.task_assign1 .con_box1').addClass('displayn');
      $('.task_assign1 .no_book').removeClass('displayn');
    };
    hideTaskAssign();

    showTaskAssign = function () {
      $('.task_assign1 .con_box1').removeClass('displayn');
      $('.task_assign1 .no_book').addClass('displayn');
    };

    // ----
    // ### 获取选择的图书，并串联它们的html内容
    // 1. 获取用户选择的书籍
    // 2. 获取这些书籍的div内容
    // 3. 删除原始选择的书籍
    // 4. 将书籍div内容插入到已选图书框中
    //
    // 注意： 通过checkbox获取对象后需要往上走两步才能获得全书的div。
    // 通过checkbox获取对象后需要往上走三步才能获得全书的div的innerHTML，
    // 而且获得的html不包括 li 标签，是它中间包含的内容。
    addBooks = function () {
      var checkedBoxes, htmlOfBooks;

      checkedBoxes = $('input:checked[type=checkbox]');
      htmlOfBooks = _.reduce(checkedBoxes, function (a, e) {
        var elementHTML, listElement;
        elementHTML = $(e).parent().parent().parent().html();
        listElement = '<li>' + elementHTML + '</li>';
        return a + listElement;
      }, '');

      $('#assign_books').html(htmlOfBooks);

    }; // addBooks ends

    // ----
    // ### 监听提交按钮，并调用相应函数
    tianjiaBooks = function () {
      $('#tj').click(function () {
        addBooks();
        showTaskAssign();
      });
    };

    // ----
    // ### YSYL.xuanshu 这个函数的返回值
    return tianjiaBooks();
  }; // YSYL.xuanshu ends

}());
