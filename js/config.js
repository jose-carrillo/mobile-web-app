$(function() {
	pikabu = new Pikabu();
	FastClick.attach(document.body);
});
$(window).on("orientationchange", function() {
	pikabu.closeSidebars();
});