// Water Ripple Effect
$(".slider").ripples({
    dropRadius: 11,
    perturbance: 0.02
});


// Typing Animation
$(".text").typed({
    strings: [
        "<strong>I love</strong><strong class='primary'> codings.</strong>",
        "<strong>and to</strong><strong class='primary'> share !!</strong>"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

 //Sticky navigation
$(window).scroll(function(){
        
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
        }
        
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
            }
    })

// Close the mobile navigation after selecting a destination.
$(".navbar-collapse a").on("click", function(){
    $(".navbar-collapse").collapse("hide");
});

    // Owl Carousel — team members
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },

      768: {

        items: 3
      }
    }
  });
       