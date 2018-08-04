//컴포넌트 제이쿼리 애니메이션 적용 - 스크롤 트리거
//-------------------------------------------------------------------------------------

$(window).scroll(function() {
  $(".NavTarget").each(function() {
    if ($(window).scrollTop() >= $(this).offset().top - 300) {
      var id = $(this).attr("id");
      $("div[id=" + id + "]").addClass("go");
    }
  });
});
