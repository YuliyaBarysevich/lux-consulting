$(".navigation").on('click', function(e){
  e.preventDefault();
  var a_element = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(a_element).offset().top - 60
  }, 100);
})


