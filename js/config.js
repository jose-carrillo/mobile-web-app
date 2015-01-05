$(function() {
	pikabu = new Pikabu();
	FastClick.attach(document.body);
	checkDeviceStandAlone();
});

$(window).on("orientationchange", function() {
	pikabu.closeSidebars();
});

function checkDeviceStandAlone() {
	if(window.navigator.standalone == true) {}
}