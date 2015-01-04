$(function() {
	pikabu = new Pikabu();
});
$(window).on("orientationchange", function() {
	pikabu.closeSidebars();
});

