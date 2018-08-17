//Function 1 . Smooth Scrolling On Click
$(document).ready(function() {
  $("a[href*=\\#]").click(function(event) {
      var linkhref = $(this).attr("href");
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $(linkhref).offset().top
      }, 1000);
  });

  //Function 2 . Navigation Bar got Activated On Click
  $("nav ul a").on("click", function(e) {
      $("nav ul a").removeClass("active");
      $(this).addClass("active");
  });

  //Function 3. mobile nav menu disappear on click
  $("input").click(function() {
      var mobileNav = $("input[id='toggle']").is(":checked");
      if (mobileNav) {
          $('.mobile ul').click(function() {
              $('#toggle').attr('checked', false);
          });
      }
  })


  //Function 4 . Navigation Bar Shrink When Scroll Down from Top
  $(window).scroll(function() {
      if ($(document).scrollTop()) {
          $("nav").addClass("shrink");
      } else {
          $("nav").removeClass("shrink");
      }

      //Function 5. Scroll spy
      $(".NavTarget").each(function() {
          if ($(window).scrollTop()>= $(this).offset().top) {
              var id = $(this).attr("id");
              $("nav ul")
                  .find("a")
                  .removeClass("active");
              $("nav ul a[href=#" + id + "]").addClass("active");
          }
      });
  });

  //Function 6. classname 'mobile' added
  $(window).resize(function() {
      var width = window.innerWidth;
      if (width <= 500) {
          $("nav").addClass("mobile");
      } else {
          $("nav").removeClass("mobile");
      }
  }).resize();
});