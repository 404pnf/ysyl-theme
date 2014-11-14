
var YSYL = {};

YSYL.debug = true;

(function () {

	var noote;
  note = function(msg) {
    if (YSYL.debug) {
      return typeof console !== "undefined" && console !== null ? console.log(msg) : void 0;
    }
  };


  // 1. 获取用户选择的书籍
  // 2. 获取这些书籍的div内容
  // 3. 删除原始选择的书籍
  // 4. 将书籍div内容插入到已选图书框中

  // 但本图书div的结构
  // 通过checkbox获取对象后需要往上走两步才能获得全书的div
  // <li>
  //     <div class="bookg_box">
  //         <div class="bookg_img">
  //         <input type="checkbox" class="bookg_input" />
  //         <img src="none" />
  //         </div>
  //         <div class="bookg_tit">Sam's Pot</div><!--做...处理-->
  //         <div class="bookg_tit_c"><span>5级</span><span>500词</span></div>
  //     </div>
  // </li>
  YSYL.xuanshu = function () {

    var addBooks;

    // 开始的时候，用户没有选择任何书。
    // 隐藏con_box1区块，显示 no_book区块。
    $('.task_assign1 .con_box1').addClass('displayn');
    $('.task_assign1 .no_book').removeClass('displayn');


    $('#tianjia').submit()

    addBooks = function () {
      var checkedBoxes, htmlOfBooks;

      checkedBoxes = $('input:checked[type=checkbox]');
      //note(checkedBoxes);

      htmlOfBooks = _.reduce(checkedBoxes, function (a, e) {
        var elementHTML, listElement;
        elementHTML = $(e).parent().parent().parent().html();
        listElement = '<li>' + elementHTML + '<li>';
        return a + listElement;
      }, '');
      note(htmlOfBooks);

      _.each(checkedBoxes, function (e) {
        // $(e).parent().parent().remove();
      });
    } // addBooks ends

  } // xuanshu ends

})();
