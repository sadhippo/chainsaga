
function showMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive ";
    } else {
      x.className = "topnav";
    }
  }

  $(document).ready(function() {
    $('#swatmen').fadeIn("slow");

    $("#btn-app").click(function() {
      location.href = 'https://cryptoguns.io/app';
    });


    $("#btnHome").click(function() {
      $('html,body').animate({
          scrollTop: $("#homepage").offset().top},
          'slow');
    });

    $("#btnCharacters").click(function() {
      $('html,body').animate({
          scrollTop: $("#characters").offset().top},
          'slow');
    });

    $("#btnTokenomics").click(function() {
      $('html,body').animate({
          scrollTop: $("#tokenomics").offset().top},
          'slow');
    });

    $("#btnRoadmap").click(function() {
      $('html,body').animate({
          scrollTop: $("#roadmap").offset().top},
          'slow');
    });

    AOS.init();

    AOS.init({
      // Global settings:
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,

      offset: 120,
      delay: 50,
      duration: 1200,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',

    });

  });
