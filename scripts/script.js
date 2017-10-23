/* Catalog of shops */

$(".catalog-of-shops__menu-button").click(function() {
  $(this).toggleClass("catalog-of-shops__menu-button--open");
});

$(".catalog-of-shops__menu-item > a").click(function(e) {
  e.preventDefault();
  $(this).siblings(".catalog-of-shops__submenu").toggleClass("catalog-of-shops__submenu--open");
  $(this).parent().toggleClass("catalog-of-shops__menu-item--active");
});

/* END - Catalog of shops */

/* Our clients carousel */

$(".our-clients__carousel-button--forward").click(function() {
  $(".our-clients__carousel-button--back").removeAttr("disabled");

  if ($(".container--our-clients").css("width") > "745px") {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      if ($($(".catalog-of-shops__carousel-item")[i]).hasClass("catalog-of-shops__carousel-item--visible")) {
        $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i + 2]).css("marginRight", "5px");
        $($(".catalog-of-shops__carousel-item")[i + 3]).addClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i + 3]).css("marginRight", 0);
        /* Параметр i со значением 3 для 7 элементов в карусели. При увеличении/уменьшении количества элементов
        в карусели параметр i нужно также пропорционально увеличивать/уменьшать */
        if (i == 3) {
          $(".our-clients__carousel-button--forward").attr("disabled", "disabled");
        }
        break;
      }    
    }
  } else if ($(".container--our-clients").css("width") == "745px") {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      if ($($(".catalog-of-shops__carousel-item")[i]).hasClass("catalog-of-shops__carousel-item--visible")) {
        $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i + 1]).css("marginRight", "5px");
        $($(".catalog-of-shops__carousel-item")[i + 2]).addClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i + 2]).css("marginRight", 0);
        /* Параметр i со значением 4 для 7 элементов в карусели. При увеличении/уменьшении количества элементов
        в карусели параметр i нужно также пропорционально увеличивать/уменьшать */
        if (i == 4) {
          $(".our-clients__carousel-button--forward").attr("disabled", "disabled");
        }
        break;
      }    
    }
  } else if ($(".container--our-clients").css("width") == "360px") {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      if ($($(".catalog-of-shops__carousel-item")[i]).hasClass("catalog-of-shops__carousel-item--visible")) {
        $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i]).css("marginRight", "5px");
        $($(".catalog-of-shops__carousel-item")[i + 1]).addClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i + 1]).css("marginRight", 0);
        /* Параметр i со значением 5 для 7 элементов в карусели. При увеличении/уменьшении количества элементов
        в карусели параметр i нужно также пропорционально увеличивать/уменьшать */
        if (i == 5) {
          $(".our-clients__carousel-button--forward").attr("disabled", "disabled");
        }
        break;
      }    
    }
  }
});

$(".our-clients__carousel-button--back").click(function() {
  $(".our-clients__carousel-button--forward").removeAttr("disabled");

  if ($(".container--our-clients").css("width") > "745px") {
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
  } else if ($(".container--our-clients").css("width") == "745px") {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      if ($($(".catalog-of-shops__carousel-item")[i]).hasClass("catalog-of-shops__carousel-item--visible")) {
        $($(".catalog-of-shops__carousel-item")[i - 1]).addClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i]).css("marginRight", 0);
        $($(".catalog-of-shops__carousel-item")[i + 1]).removeClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i + 1]).css("marginRight", "5px");
        if (i == 1) {
          $(".our-clients__carousel-button--back").attr("disabled", "disabled");
        }
        break;
      }    
    }
  } else if ($(".container--our-clients").css("width") == "360px") {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      if ($($(".catalog-of-shops__carousel-item")[i]).hasClass("catalog-of-shops__carousel-item--visible")) {
        $($(".catalog-of-shops__carousel-item")[i - 1]).addClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i - 1]).css("marginRight", 0);
        $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
        $($(".catalog-of-shops__carousel-item")[i]).css("marginRight", "5px");
        if (i == 1) {
          $(".our-clients__carousel-button--back").attr("disabled", "disabled");
        }
        break;
      }    
    }
  }
});

function startCarouselItems() {
  $(".our-clients__carousel-button--back").attr("disabled", "disabled");
  $(".our-clients__carousel-button--forward").removeAttr("disabled");

  if ($(".container--our-clients").css("width") <= "360px") {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
    }
    $($(".catalog-of-shops__carousel-item")[0]).addClass("catalog-of-shops__carousel-item--visible");
    $($(".catalog-of-shops__carousel-item")[0]).css("marginRight", 0);
  } else if ($(".container--our-clients").css("width") <= "745px") {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
    }
    $($(".catalog-of-shops__carousel-item")[0]).addClass("catalog-of-shops__carousel-item--visible");
    $($(".catalog-of-shops__carousel-item")[0]).css("marginRight", "5px");
    $($(".catalog-of-shops__carousel-item")[1]).addClass("catalog-of-shops__carousel-item--visible");
    $($(".catalog-of-shops__carousel-item")[1]).css("marginRight", 0);
  } else {
    for (var i = 0; i < $(".catalog-of-shops__carousel-item").length; i++) {
      $($(".catalog-of-shops__carousel-item")[i]).removeClass("catalog-of-shops__carousel-item--visible");
    }
    $($(".catalog-of-shops__carousel-item")[0]).addClass("catalog-of-shops__carousel-item--visible");
    $($(".catalog-of-shops__carousel-item")[0]).css("marginRight", "5px");
    $($(".catalog-of-shops__carousel-item")[1]).addClass("catalog-of-shops__carousel-item--visible");
    $($(".catalog-of-shops__carousel-item")[1]).css("marginRight", "5px");
    $($(".catalog-of-shops__carousel-item")[2]).addClass("catalog-of-shops__carousel-item--visible");
    $($(".catalog-of-shops__carousel-item")[2]).css("marginRight", 0);
  }
};

$(document).ready(function() {
  startCarouselItems();
});

$(window).resize(function() {
  startCarouselItems();
});

/* END - Our clients carousel */
  
