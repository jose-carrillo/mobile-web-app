$(function() {
	pikabu = new Pikabu();
	FastClick.attach(document.body);
	checkDeviceStandAlone();
});
$(window).on("orientationchange", function() {
	pikabu.closeSidebars();
});
//uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
  e.preventDefault();
});
//uses body because jquery on events are called off of the element they are
//added to, so bubbling would not work if we used document instead.
$('body').on('touchstart','.scroll',function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    e.currentTarget.scrollTop -= 1;
  }
});
//prevents preventDefault from being called on document if it sees a scroll div
$('body').on('touchmove','.scroll',function(e) {
  e.stopPropagation();
});