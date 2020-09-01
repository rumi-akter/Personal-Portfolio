$( document ).ready(function() {


    $('#slides').superslides({
        play: 2000,
        animation: 'fade',
        pagination: false,
      });

    });


      $( document ).ready(function() {
      var typed3 = new Typed('#typed3', {
        strings: ['I am a student', 'I am a freelancer', 'I am a web disgener', 'I am a web developer'],
        typeSpeed: 0,
        backSpeed: 0,
        smartBackspace: true, // this is a default
        loop: true
      });

    });



 
      $( document ).ready(function() {
      $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
      });

      $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
          // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
          if ( 
              $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
              $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
          ) {
              // Get percentage of progress
              percent = $(value).data('percentage');
              // Get radius of the svg's circle.complete
              radius = $(this).find($('circle.complete')).attr('r');
              // Get circumference (2πr)
              circumference = 2 * Math.PI * radius;
              // Get stroke-dashoffset value based on the percentage of the circumference
              strokeDashOffset = circumference - ((percent * circumference) / 100);
              // Transition progress for 1.25 seconds
              $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
          }
        });
      }).trigger('scroll');

    });


      $(document).ready(function(){
        //  Counterplugin
              $('.counter').counterUp({
                  delay: 10,
                  time: 1000
              });





              $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });




            var mixer = mixitup('.images'); 





});


