$(function() {
	pikabu = new Pikabu();
});
$(window).on("orientationchange", function() {
	pikabu.closeSidebars();
});

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.prependTo('body').addClass('fixed');
  else sticky.prependTo('.m-pikabu-container').removeClass('fixed');
});