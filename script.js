$(document).ready(function(){
  $(".hamburger").click(function() {
    $(".menu-desktop").addClass('active');
    $('.menu-close').addClass('change');
  });
  $(".menu-close").click(function() {
    $(".menu-desktop").removeClass('active');
    $('.menu-close').removeClass('change');
  });

  if (window.innerWidth>=900){
  $('#fullpage').fullpage({
    //options here
    scrollingSpeed: 700,
    responsiveWidth:900,
    easingcss3: 'ease-in',
    scrollBar: false,
    scrollOverflow: false,
    //parallax: true,
    //parallaxKey: '',
    //parallaxOptions: {
    //    type: 'reveal',
    //    percentage: 100
    //},
    fitToSection:false,
    lockAnchors: false,
    navigation: false,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: false,
    controlArrows: false,
    slidesNavPosition: 'bottom',
    verticalCentered: false,
    responsiveWidth:900,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9'],

    afterLoad: function(anchorLink, index){
        var loadedSection = $(this);

        //using index
        if(index == 2 || index == 4 || index == 5 || index == 7 || index == 9){
          $('.header').addClass('black');
          $('.scrollDown').addClass('black');
        }
    },

    onLeave: function(index, nextIndex, direction){
        var leavingSection = $(this);

        //after leaving section 2
        if(index == 2 && direction =='down' || index == 5 && direction =='down'
          || index == 7 && direction =='down'){
          $('.header').removeClass('black');
          $('.scrollDown').removeClass('black');
        }

        else if(index == 2 && direction == 'up' || index == 4 && direction == 'up' ||
          index == 7 && direction == 'up' || index == 9 && direction == 'up'){
          $('.header').removeClass('black');
          $('.scrollDown').removeClass('black');
        }
    }
  });

  $('.scrollDown').click(function () {
      $.fn.fullpage.moveSectionDown();
  });
  $('#sec9 .scrollDown').click(function () {
      $.fn.fullpage.moveSectionUp();
  });

     $('#fullpage').addClass('fullpage-wrapper');
  }
  
  else {
    $('#fullpage').removeClass('fullpage-wrapper');
      
    $(".menu-desktop a").click(function() {
      $(".menu-desktop").removeClass('active');
      $('.menu-close').removeClass('change');
    });

    $(".menu-desktop a[href='#section2']").attr('href', '#sec2');
    $(".menu-desktop a[href='#section3']").attr('href', '#sec3');
    $(".menu-desktop a[href='#section4']").attr('href', '#sec4');
    $(".menu-desktop a[href='#section5']").attr('href', '#sec5');
    $(".menu-desktop a[href='#section6']").attr('href', '#sec6');
    $(".menu-desktop a[href='#section7']").attr('href', '#sec7');
    $(".menu-desktop a[href='#section9']").attr('href', '#sec9');

  }

  

  $('.nextSlide').click(function(){
    $(this).parent('.calcSlide').removeClass('active').next('.calcSlide').addClass('active');
  });


$(window).resize(function(){
  if (window.innerWidth>=900){
    $(".menu-desktop a[href='#sec2']").attr('href', '#section2');
    $(".menu-desktop a[href='#sec3']").attr('href', '#section3');
    $(".menu-desktop a[href='#sec4']").attr('href', '#section4');
    $(".menu-desktop a[href='#sec5']").attr('href', '#section5');
    $(".menu-desktop a[href='#sec6']").attr('href', '#section6');
    $(".menu-desktop a[href='#sec7']").attr('href', '#section7');
    $(".menu-desktop a[href='#sec9']").attr('href', '#section9');
    }
  else  {
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
});

});