
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

    var telInput = $(".form_phone"),
    errorMsg = $(".help-block"),
    validMsg = $("#valid-msg");

  telInput.intlTelInput({
    allowExtensions: true,
    formatOnDisplay: true,
    autoFormat: true,
    autoHideDialCode: true,
    autoPlaceholder: "aggressive",
    defaultCountry: "auto",
    ipinfoToken: "your-ipinfo-token", // Use your actual IPinfo token here
    nationalMode: false,
    numberType: "MOBILE",
    preferredCountries: ['sa', 'ae', 'qa', 'om', 'bh', 'kw', 'ma'],
    preventInvalidNumbers: true,
    separateDialCode: true,
    geoIpLookup: function(callback) {
      $.get("https://ipinfo.io?token=your-ipinfo-token", function() {}, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "";
        callback(countryCode);
      });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
  });

function reset() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
}

telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

telInput.on("keyup change", reset);
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

  $('.form_phone').on('input', function() {
    this.value = this.value.replace(/\D/g, '');
  });

  $('#contact-form').on('submit', function(event) {
    var isValid = true;

    // Validate Name
    if ($('#form_name').val().trim() === '') {
      isValid = false;
      $('#form_name').next('.help-block').text('Name is required.');
    } else {
      $('#form_name').next('.help-block').text('');
    }

    // Validate Phone
    var phonePattern = /^[0-9]+$/;
    if (!phonePattern.test($('.form_phone').val())) {
      isValid = false;
      $('.form_phone').next('.help-block').text('Valid phone number is required.');
    } else {
      $('.form_phone').next('.help-block').text('');
    }

    // Validate Country
    if ($('#form_country').val().trim() === '') {
      isValid = false;
      $('#form_country').next('.help-block').text('Country is required.');
    } else {
      $('#form_country').next('.help-block').text('');
    }

    // Validate Email
    if (!validator.isEmail($('#form_email').val())) {
      isValid = false;
      $('#form_email').next('.help-block').text('Valid email is required.');
    } else {
      $('#form_email').next('.help-block').text('');
    }

     // Validate Treatment
    if ($('#form_treatment').val().trim() === '') {
      isValid = false;
      $('#form_treatment').next('.help-block').text('Please selected the treatment.');
    } else {
      $('#form_treatement').next('.help-block').text('');
    }


    if (!isValid) {
      event.preventDefault();
    }
  });

  
  });
