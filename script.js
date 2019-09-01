$(document).ready(function(){
  $(".hamburger").click(function() {
    $(".menu-desktop").addClass('active');
    $('.menu-close').addClass('change');
  });
  $(".menu-close").click(function() {
    $(".menu-desktop").removeClass('active');
    $('.menu-close').removeClass('change');
  });

  $('.close').click(function(){
    $('.popup').fadeOut();
  });

  $('.nextSlide').click(function(){
    $(this).parent('.calcSlide').removeClass('active').next('.calcSlide').addClass('active');
  });

  if (window.innerWidth>900 || window.innerHeight>600){
    $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally: true
    });

    $('.scrollDown').click(function () {
        $.fn.fullpage.moveSectionDown();
    });
    $('#sec9 .scrollDown').click(function () {
        $.fn.fullpage.moveSectionUp();
    });

  }

  if (window.innerWidth<=900 || window.innerHeight<=600) {
    fullpage_api.setResponsive(true);

    $(".menu-desktop a[href='#section2']").attr('href', '#sec2');
    $(".menu-desktop a[href='#section3']").attr('href', '#sec3');
    $(".menu-desktop a[href='#section4']").attr('href', '#sec4');
    $(".menu-desktop a[href='#section5']").attr('href', '#sec5');
    $(".menu-desktop a[href='#section6']").attr('href', '#sec6');
    $(".menu-desktop a[href='#section7']").attr('href', '#sec7');
    $(".menu-desktop a[href='#section9']").attr('href', '#sec9');
  }


  

  else {
      
    $(".menu-desktop a").click(function() {
      $(".menu-desktop").removeClass('active');
      $('.menu-close').removeClass('change');
    });
  }

  

  


  $(window).resize(function(){
    if (window.innerWidth>900 || window.innerHeight>600){
      $(".menu-desktop a[href='#sec2']").attr('href', '#section2');
      $(".menu-desktop a[href='#sec3']").attr('href', '#section3');
      $(".menu-desktop a[href='#sec4']").attr('href', '#section4');
      $(".menu-desktop a[href='#sec5']").attr('href', '#section5');
      $(".menu-desktop a[href='#sec6']").attr('href', '#section6');
      $(".menu-desktop a[href='#sec7']").attr('href', '#section7');
      $(".menu-desktop a[href='#sec9']").attr('href', '#section9');
      
      fullpage_api.setResponsive(false);
      fullpage_api.reBuild('all');
      

      $('.scrollDown').click(function () {
          $.fn.fullpage.moveSectionDown();
      });
      $('#sec9 .scrollDown').click(function () {
          $.fn.fullpage.moveSectionUp();
      });
    }

    if (window.innerWidth<=900 || window.innerHeight<=600) {
      fullpage_api.setResponsive(true);
      /*fullpage_api.destroy('all');*/
      $(".menu-desktop a[href='#section2']").attr('href', '#sec2');
      $(".menu-desktop a[href='#section3']").attr('href', '#sec3');
      $(".menu-desktop a[href='#section4']").attr('href', '#sec4');
      $(".menu-desktop a[href='#section5']").attr('href', '#sec5');
      $(".menu-desktop a[href='#section6']").attr('href', '#sec6');
      $(".menu-desktop a[href='#section7']").attr('href', '#sec7');
      $(".menu-desktop a[href='#section9']").attr('href', '#sec9');

      $(".menu-desktop a").click(function() {
        $(".menu-desktop").removeClass('active');
        $('.menu-close').removeClass('change');
      });
    }

    else  {
      
    }
  });

  $('#sideSizeTrigger').click(function(){
    $('#sideSizePopup').toggleClass('active');
  });
  $('#sideSizePopup').click(function(){
    $('#sideSizePopup').toggleClass('active');
  });

});


