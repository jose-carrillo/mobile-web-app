$(function() {
	pikabu = new Pikabu();
	FastClick.attach(document.body);
	checkDeviceStandAlone();
});
$(window).on("orientationchange", function() {
	pikabu.closeSidebars();
});

function checkDeviceStandAlone() {
	if (window.navigator.standalone == true) {
		var overflow = function(el) {
				el.addEventListener('touchstart', function() {
					var top = el.scrollTop,
						totalScroll = el.scrollHeight,
						currentScroll = top + el.offsetHeight
					if (top === 0) {
						el.scrollTop = 1
					} else if (currentScroll === totalScroll) {
						el.scrollTop = top - 1
					}
				})
				el.addEventListener('touchmove', function(evt) {
					if (el.offsetHeight < el.scrollHeight) evt._isScroller = true
				})
			}
		overflow(document.querySelector('#scroll'));
		document.body.addEventListener('touchmove', function(evt) {
			if (!evt._isScroller) {
				evt.preventDefault()
			}
		});
	}
}