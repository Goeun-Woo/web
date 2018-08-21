// Function 4. Scroll Trigger :  WEB FRONT-END 타이틀 애니메이션, 위에서 아래로 내려오기
$(window).scroll(function() {
  $(".NavTarget").each(function() {
    if ($(window).scrollTop() >= $(this).offset().top - 300) {
      var id = $(this).attr("id");
      $("section[id=" + id + "]").addClass("go");
    }
  });
});
