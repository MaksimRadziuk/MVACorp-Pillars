$(document).ready(function(){
  $(".hamburger").click(function() {
    $(".menu-desktop").addClass('active');
    $('.menu-close').addClass('change');
  });
  $(".menu-close").click(function() {
    $(".menu-desktop").removeClass('active');
    $('.menu-close').removeClass('change');
  });


  $('#fullpage').fullpage({
    //options here
    scrollingSpeed: 700,
    responsiveWidth:800,
    easingcss3: 'ease-in',
    scrollBar: false,
    scrollOverflow: false,
    parallax: true,
    parallaxKey: '',
    parallaxOptions: {
        type: 'reveal',
        percentage: 100
    },
    fitToSection:false,
    lockAnchors: false,
    navigation: false,
    navigationPosition: 'right',
    showActiveTooltip: false,
    slidesNavigation: false,
    controlArrows: false,
    slidesNavPosition: 'bottom',
    verticalCentered: false,
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

  $('.nextSlide').click(function(){
    $(this).parent('.calcSlide').removeClass('active').next('.calcSlide').addClass('active');
  });

});