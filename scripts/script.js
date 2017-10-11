/* Catalog of shops */

$(".catalog-of-shops__menu-button").click(function() {
  $(this).toggleClass("catalog-of-shops__menu-button--open");
});

$(".catalog-of-shops__menu-item > a").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".catalog-of-shops__menu-item").length; i++) {
    $($(".catalog-of-shops__menu-item")[i]).removeClass("catalog-of-shops__menu-item--active");
  }
  $(this).siblings(".catalog-of-shops__submenu").toggleClass("catalog-of-shops__submenu--open");
  $(this).parent().toggleClass("catalog-of-shops__menu-item--active");

  /*if ($(this).siblings(".catalog-of-shops__submenu").hasClass("catalog-of-shops__submenu--open")) {
    $(this).parent().addClass("catalog-of-shops__menu-item--active");
  } else {
    $(this).parent().removeClass("catalog-of-shops__menu-item--active");
  }*/
  
});
