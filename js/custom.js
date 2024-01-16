$(function () {
  window.ityped.init(document.querySelector('.hero-typed'),{
    strings: ['Digital Agency',' Multiplatform '],
    loop: true
  })

  // Back to Top
  var btn = $("#button-back");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  // Header Fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".header").addClass("header-sticky");
    } else {
      $(".header").removeClass("header-sticky");
    }
  });
  
});


 // countup
 $('.counter').countUp();

// Aos Animation
AOS.init();

// lighBox
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

// VenuBox
new VenoBox({
  selector: ".my-video-links",
});