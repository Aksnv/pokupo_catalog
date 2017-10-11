/* Catalog of shops */

$(".catalog-of-shops__menu-button").click(function() {
  $(this).toggleClass("catalog-of-shops__menu-button--open");
});

$(".catalog-of-shops__menu-item > a").click(function(e) {
  e.preventDefault();
  $(this).siblings(".catalog-of-shops__submenu").toggleClass("catalog-of-shops__submenu--open");
  $(this).parent().toggleClass("catalog-of-shops__menu-item--active");
});
