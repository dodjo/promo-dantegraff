$(function () {

  //Скрыть окно авторизации
  $(".modal__close").click(function () {
    $(".modal").hide()
  })

  //Показать окно авторизации
  $(".header__button-enter").click(function () {
    $(".modal").show()
  })

  $("#accordion").accordion({
    animate: 100,
    active: false,
    collapsible: true
  });

});
