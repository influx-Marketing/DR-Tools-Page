// Nav hover adds corresposnding section colour on hover
 $(document).ready(function(){ 
  $(".blue").mouseenter(function(){
    $(".blue-circle").addClass("blue-c");
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".blue").mouseleave(function(){
    $(".blue-circle").removeClass("blue-c");
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".blue-title").mouseenter(function(){
    $(".blue-circle").addClass("blue-c");
  });
  $(".blue-title").mouseleave(function(){
    $(".blue-circle").removeClass("blue-c");
  });

  $(".blue-circle").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".blue-circle").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".pink").mouseenter(function(){
    $(".pink-circle").addClass("pink-c");
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".pink").mouseleave(function(){
    $(".pink-circle").removeClass("pink-c");
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".green").mouseenter(function(){
    $(".green-circle").addClass("green-c");
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".green").mouseleave(function(){
    $(".green-circle").removeClass("green-c");
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".orange").mouseenter(function(){
    $(".orange-circle").addClass("orange-c");
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".orange").mouseleave(function(){
    $(".orange-circle").removeClass("orange-c");
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".purple").mouseenter(function(){
    $(".purple-circle").addClass("purple-c");
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".purple").mouseleave(function(){
    $(".purple-circle").removeClass("purple-c");
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".dark-blue").mouseenter(function(){
    $(".dark-blue-circle").addClass("dark-blue-c");
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".dark-blue").mouseleave(function(){
    $(".dark-blue-circle").removeClass("dark-blue-c");
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".dark-blue-title").mouseenter(function(){
    $(".dark-blue-circle").addClass("dark-blue-c");
  });
  $(".dark-blue-title").mouseleave(function(){
    $(".dark-blue-circle").removeClass("dark-blue-c");
  });

  $(".dark-blue-circle").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".dark-blue-circle").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".orange-title").mouseenter(function(){
    $(".orange-circle").addClass("orange-c");
  });
  $(".orange-title").mouseleave(function(){
    $(".orange-circle").removeClass("orange-c");
  });

  $(".orange-circle").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".orange-circle").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".pink-title").mouseenter(function(){
    $(".pink-circle").addClass("pink-c");
  });
  $(".pink-title").mouseleave(function(){
    $(".pink-circle").removeClass("pink-c");
  });

  $(".pink-circle").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".pink-circle").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".green-title").mouseenter(function(){
    $(".green-circle").addClass("green-c");
  });
  $(".green-title").mouseleave(function(){
    $(".green-circle").removeClass("green-c");
  });

  $(".green-circle").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".green-circle").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".purple-title").mouseenter(function(){
    $(".purple-circle").addClass("purple-c");
  });
  $(".purple-title").mouseleave(function(){
    $(".purple-circle").removeClass("purple-c");
  });

  $(".purple-circle").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".purple-circle").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".yellow").mouseenter(function(){
    $(".yellow-circle").addClass("yellow-c");
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".yellow").mouseleave(function(){
    $(".yellow-circle").removeClass("yellow-c");
    $(".red-circle").removeClass("grey-circle-2");
  });

  $(".yellow-title").mouseenter(function(){
    $(".yellow-circle").addClass("yellow-c");
  });
  $(".yellow-title").mouseleave(function(){
    $(".yellow-circle").removeClass("yellow-c");
  });

  $(".yellow-circle").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
  });
  $(".yellow-circle").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
  });
});

 // Nav hover removes styles from red section
 $(document).ready(function(){
  $('.grey-circle').hover(function() {
    $('.red-home').css('display', 'none');
  }, function() {
    $('.red-home').css('display', '');
  });

  $(".grey-circle").mouseenter(function(){
    $(".red").addClass("red-white");
    $(".st1-red").addClass("st1-red-2");
    $(".red h1").addClass("text-dark");
    $(".img-class").attr("src","img/db-logo.png");
  });
  $(".grey-circle").mouseleave(function(){
    $(".red").removeClass("red-white");
    $(".st1-red").removeClass("st1-red-2");
    $(".red h1").removeClass("text-dark");
    $(".img-class").attr("src","img/db-logo-white.png");
  });

  $('.title_g').hover(function() {
    $('.red-home').css('display', 'none');
  }, function() {
    $('.red-home').css('display', '');
  });

  $(".title_g").mouseenter(function(){
    $(".red-circle").addClass("grey-circle-2");
    $(".red").addClass("red-white");
    $(".st1-red").addClass("st1-red-2");
    $(".red h1").addClass("text-dark");
    $(".img-class").attr("src","img/db-logo.png");
  });
  $(".title_g").mouseleave(function(){
    $(".red-circle").removeClass("grey-circle-2");
    $(".red").removeClass("red-white");
    $(".st1-red").removeClass("st1-red-2");
    $(".red h1").removeClass("text-dark");
    $(".img-class").attr("src","img/db-logo-white.png");
  });
});

 // Red nav hover effects
//  $(function() {
//   $('.red-title').hover(function() {
//     $('.st1-red').css('fill', '#fff');
//     $('.red-h1').css('color', '#fff');
//     $('.red-img').css('display', 'block');
//     $('.red').css('background-color', '#FB1438');
//   }, function() {
//     $('.st1-red').css('fill', '');
//     $('.red-h1').css('color', '');
//     $('.red-img').css('display', '');
//     $('.red').css('background-color', '');
//   });
// });

 // Blue nav hover effects
 $(function() {
  $('.blue-circle').hover(function() {
    $('.st1-blue').css('fill', '#fff');
    $('.blue-h1').css('color', '#fff');
    $('.blue-img').css('opacity', '0.8');
    $('.blue-img').css('left', '31%');
    $('.blue').css('background-position', 'left bottom');
  }, function() {
    $('.st1-blue').css('fill', '');
    $('.blue-h1').css('color', '');
    $('.blue-img').css('opacity', '');
    $('.blue-img').css('left', '');
    $('.blue').css('background-position', '');
  });

  $('.blue-title').hover(function() {
    $('.st1-blue').css('fill', '#fff');
    $('.blue-h1').css('color', '#fff');
    $('.blue-img').css('opacity', '0.8');
    $('.blue-img').css('left', '31%');
    $('.blue').css('background-position', 'left bottom');
  }, function() {
    $('.st1-blue').css('fill', '');
    $('.blue-h1').css('color', '');
    $('.blue-img').css('opacity', '');
    $('.blue-img').css('left', '');
    $('.blue').css('background-position', '');
  });
});

  // Pink nav hover effects
  $(function() {
    $('.pink-circle').hover(function() {
      $('.st1-pink').css('fill', '#fff');
      $('.pink-h1').css('color', '#fff');
      $('.pink-img').css('opacity', '0.8');
      $('.pink-img').css('left', '-51%');
      $('.pink').css('background-position', 'right bottom');
    }, function() {
      $('.st1-pink').css('fill', '');
      $('.pink-h1').css('color', '');
      $('.pink-img').css('opacity', '');
      $('.pink-img').css('left', '');
      $('.pink').css('background-position', '');
    });

    $('.pink-title').hover(function() {
      $('.st1-pink').css('fill', '#fff');
      $('.pink-h1').css('color', '#fff');
      $('.pink-img').css('opacity', '0.8');
      $('.pink-img').css('left', '-51%');
      $('.pink').css('background-position', 'right bottom');
    }, function() {
      $('.st1-pink').css('fill', '');
      $('.pink-h1').css('color', '');
      $('.pink-img').css('opacity', '');
      $('.pink-img').css('left', '');
      $('.pink').css('background-position', '');
    });
  });

  // Green nav hover effects
  $(function() {
    $('.green-circle').hover(function() {
      $('.st1-green').css('fill', '#fff');
      $('.green-h1').css('color', '#fff');
      $('.green-img').css('opacity', '0.8');
      $('.green-img').css('left', '-72%');
      $('.green').css('background-position', 'right bottom');
    }, function() {
      $('.st1-green').css('fill', '');
      $('.green-h1').css('color', '');
      $('.green-img').css('opacity', '');
      $('.green-img').css('left', '');
      $('.green').css('background-position', '');
    });

    $('.green-title').hover(function() {
      $('.st1-green').css('fill', '#fff');
      $('.green-h1').css('color', '#fff');
      $('.green-img').css('opacity', '0.8');
      $('.green-img').css('left', '-72%');
      $('.green').css('background-position', 'right bottom');
    }, function() {
      $('.st1-green').css('fill', '');
      $('.green-h1').css('color', '');
      $('.green-img').css('opacity', '');
      $('.green-img').css('left', '');
      $('.green').css('background-position', '');
    });
  });

  // Orange nav hover effects
  $(function() {
    $('.orange-circle').hover(function() {
      $('.st1-orange').css('fill', '#fff');
      $('.orange-h1').css('color', '#fff');
      $('.orange-img').css('opacity', '0.8');
      $('.orange-img').css('left', '53.5%');
      $('.orange').css('background-position', 'left bottom');
    }, function() {
      $('.st1-orange').css('fill', '');
      $('.orange-h1').css('color', '');
      $('.orange-img').css('opacity', '');
      $('.orange-img').css('left', '');
      $('.orange').css('background-position', '');
    });

    $('.orange-title').hover(function() {
      $('.st1-orange').css('fill', '#fff');
      $('.orange-h1').css('color', '#fff');
      $('.orange-img').css('opacity', '0.8');
      $('.orange-img').css('left', '53.5%');
      $('.orange').css('background-position', 'left bottom');
    }, function() {
      $('.st1-orange').css('fill', '');
      $('.orange-h1').css('color', '');
      $('.orange-img').css('opacity', '');
      $('.orange-img').css('left', '');
      $('.orange').css('background-position', '');
    });
  });

   // Purple nav hover effects
   $(function() {
    $('.purple-circle').hover(function() {
      $('.st1-purple').css('fill', '#fff');
      $('.purple-h1').css('color', '#fff');
      $('.purple-img').css('opacity', '0.8');
      $('.purple-img').css('left', '32.5%');
      $('.purple').css('background-position', 'left bottom');
    }, function() {
      $('.st1-purple').css('fill', '');
      $('.purple-h1').css('color', '');
      $('.purple-img').css('opacity', '');
      $('.purple-img').css('left', '');
      $('.purple').css('background-position', '');
    });

    $('.purple-title').hover(function() {
      $('.st1-purple').css('fill', '#fff');
      $('.purple-h1').css('color', '#fff');
      $('.purple-img').css('opacity', '0.8');
      $('.purple-img').css('left', '32.5%');
      $('.purple').css('background-position', 'left bottom');
    }, function() {
      $('.st1-purple').css('fill', '');
      $('.purple-h1').css('color', '');
      $('.purple-img').css('opacity', '');
      $('.purple-img').css('left', '');
      $('.purple').css('background-position', '');
    });
  });

 // Dark blue nav hover effects
 $(function() {
  $('.dark-blue-circle').hover(function() {
    $('.st1-dark-blue').css('fill', '#fff');
    $('.dark-blue-h1').css('color', '#fff');
    $('.dark-blue-img').css('opacity', '0.8');
    $('.dark-blue-img').css('left', '-73.3%');
    $('.dark-blue').css('background-position', 'right bottom');
  }, function() {
    $('.st1-dark-blue').css('fill', '');
    $('.dark-blue-h1').css('color', '');
    $('.dark-blue-img').css('opacity', '');
    $('.dark-blue-img').css('left', '');
    $('.dark-blue').css('background-position', '');
  });

  $('.dark-blue-title').hover(function() {
    $('.st1-dark-blue').css('fill', '#fff');
    $('.dark-blue-h1').css('color', '#fff');
    $('.dark-blue-img').css('opacity', '0.8');
    $('.dark-blue-img').css('left', '-73.3%');
    $('.dark-blue').css('background-position', 'right bottom');
  }, function() {
    $('.st1-dark-blue').css('fill', '');
    $('.dark-blue-h1').css('color', '');
    $('.dark-blue-img').css('opacity', '');
    $('.dark-blue-img').css('left', '');
    $('.dark-blue').css('background-position', '');
  });
});

// Yellow nav hover effects
$(function() {
  $('.yellow-circle').hover(function() {
    $('.st1-yellow').css('fill', '#fff');
    $('.yellow-h1').css('color', '#fff');
    $('.yellow-img').css('opacity', '0.8');
    $('.yellow-img').css('left', '-53%');
    $('.yellow').css('background-position', 'right bottom');
  }, function() {
    $('.st1-yellow').css('fill', '');
    $('.yellow-h1').css('color', '');
    $('.yellow-img').css('opacity', '');
    $('.yellow-img').css('left', '');
    $('.yellow').css('background-position', '');
  });

  $('.yellow-title').hover(function() {
    $('.st1-yellow').css('fill', '#fff');
    $('.yellow-h1').css('color', '#fff');
    $('.yellow-img').css('opacity', '0.8');
    $('.yellow-img').css('left', '-53%');
    $('.yellow').css('background-position', 'right bottom');
  }, function() {
    $('.st1-yellow').css('fill', '');
    $('.yellow-h1').css('color', '');
    $('.yellow-img').css('opacity', '');
    $('.yellow-img').css('left', '');
    $('.yellow').css('background-position', '');
  });
});
