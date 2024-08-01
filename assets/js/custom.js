
  $(document).ready(function(){

    var sectionIds = $('a.nav-link');
  
      $(document).scroll(function(){
          sectionIds.each(function(){
  
              var container = $(this).attr('href');
              var containerOffset = $(container).offset().top;
              var containerHeight = $(container).outerHeight();
              var containerBottom = containerOffset + containerHeight;
              var scrollPosition = $(document).scrollTop();
      
              if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                  $(this).addClass('active');
              } else{
                  $(this).removeClass('active');
              }
      
      
          });
      });

      var scrollTrigger = 500; 

      $(window).scroll(function () {
          if ($(this).scrollTop() > scrollTrigger) {
              $('#toTop').fadeIn();
          } else {
              $('#toTop').fadeOut();
          }
      });
  
      $('#toTop').click(function () {
          $('html, body').animate({ scrollTop: 0 }, 1000);
          return false;
      });

      function checkWidth() {
        if ($(window).width() <= 520) {
            $('#logo').attr('src', 'assets/images/logo_white.png');
        } else {
            $('#logo').attr('src', 'assets/images/logo.png');
        }
    }

    checkWidth();

    $(window).resize(function() {
        checkWidth();
    });

    $('#navbarSupportedContent').on('shown.bs.collapse', function () {
      $('.fa-bars').hide();
      $('.fa-xmark').show();
  });

  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
      $('.fa-bars').show();
      $('.fa-xmark').hide();
  });

    $(function() {  
      $( "#accordion" ).accordion();  
    }); 
  
    $(function() {  
      $( "#accordion-2" ).accordion();  
    }); 

    $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows : false,
      dots: true,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.autoplay-2').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows : false,
      dots: true,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


  });

  document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.hidden-animation');

  function checkVisibility() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
        const animation = section.getAttribute('data-animation');
        section.classList.add('show-animation', animation);
        section.classList.remove('hidden-animation');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();

  var input = document.querySelector("#telephone");
  window.intlTelInput(input,({

  }));

  
  });
