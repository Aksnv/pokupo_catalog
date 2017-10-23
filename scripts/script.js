/* Catalog of shops */

$(".catalog-of-shops__menu-button").click(function() {
  $(this).toggleClass("catalog-of-shops__menu-button--open");
});

$(".catalog-of-shops__menu-item > a").click(function(e) {
  e.preventDefault();
  $(this).siblings(".catalog-of-shops__submenu").toggleClass("catalog-of-shops__submenu--open");
  $(this).parent().toggleClass("catalog-of-shops__menu-item--active");
});


/* Our clients carousel */

$(".our-clients__carousel-button--forward").click(function() {
  $(".our-clients__carousel-button--back").removeAttr("disabled");

  for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
    if ($($(".catalog-of-shops__carousel-item")[i]).hasClass("catalog-of-shops__carousel-item--visible")) {
      $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
      $($(".catalog-of-shops__carousel-item")[i + 2]).css("marginRight", "5px");
      $($(".catalog-of-shops__carousel-item")[i + 3]).addClass("catalog-of-shops__carousel-item--visible");
      $($(".catalog-of-shops__carousel-item")[i + 3]).css("marginRight", 0);
      if (i == 3) {
        $(".our-clients__carousel-button--forward").attr("disabled", "disabled");
      }
      break;
    }    
  }
});

$(".our-clients__carousel-button--back").click(function() {
  $(".our-clients__carousel-button--forward").removeAttr("disabled");

  for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
    if ($($(".catalog-of-shops__carousel-item")[i]).hasClass("catalog-of-shops__carousel-item--visible")) {
      $($(".catalog-of-shops__carousel-item")[i - 1]).addClass("catalog-of-shops__carousel-item--visible");
      $($(".catalog-of-shops__carousel-item")[i + 1]).css("marginRight", 0);
      $($(".catalog-of-shops__carousel-item")[i + 2]).removeClass("catalog-of-shops__carousel-item--visible");
      $($(".catalog-of-shops__carousel-item")[i + 2]).css("marginRight", "5px");
      if (i == 1) {
        $(".our-clients__carousel-button--back").attr("disabled", "disabled");
      }
      break;
    }    
  }
});
