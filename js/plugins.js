(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})();

// mobify-pikabu 0.2.2 2014-04-10
var Mobify=window.Mobify=window.Mobify||{};Mobify.$=Mobify.$||window.Zepto||window.jQuery,function(t){function e(){function t(){var t=["webkit","moz","o","ms"],e=document.createElement("div"),i=document.getElementsByTagName("body")[0],s=!1;i.appendChild(e);for(var n=0;t.length>n;n++){var o=t[n];e.style[o+"OverflowScrolling"]="touch"}e.style.overflowScrolling="touch";var r=window.getComputedStyle&&window.getComputedStyle(e);r||(r=e.currentStyle),s=!!r.overflowScrolling;for(var n=0;t.length>n;n++){var o=t[n];if(r[o+"OverflowScrolling"]){s=!0;break}}return e.parentNode.removeChild(e),s}function e(){var t=/Android\s+([\d\.]+)/.exec(window.navigator.userAgent);return!(!t||!t.length)}function i(){var t=/Android\s+([\d\.]+)/.exec(window.navigator.userAgent);return!!(t&&t.length&&3>parseInt(t[1]))}function s(){var t=document.body||document.documentElement,e=t.style,i="transition";if("string"==typeof e[i])return!0;v=["Moz","Webkit","Khtml","O","ms"],i=i.charAt(0).toUpperCase()+i.substr(1);for(var s=0;v.length>s;s++)if("string"==typeof e[v[s]+i])return!0;return!1}function n(){var t,e=document.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(e,null);for(var s in i)void 0!==e.style[s]&&(e.style[s]="translate3d(1px,1px,1px)",t=window.getComputedStyle(e).getPropertyValue(i[s]));return document.body.removeChild(e),void 0!==t&&t.length>0&&"none"!==t}function o(){if(/iPhone\ OS\ 3_1/.test(navigator.userAgent))return void 0;var t,e=document.createElement("fakeelement"),i={transition:"transitionEnd transitionend",OTransition:"oTransitionEnd",MSTransition:"msTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}function r(t){var e=navigator.userAgent.match(/Chrome\/([\d\.]+)\s/),t=29;return e&&parseFloat(e[1])>=t}return{hasOverflowScrollingTouch:t(),isAndroid:e(),isLegacyAndroid:i(),supportsTransitions:s(),has3d:n(),transitionEvent:o(),isNewChrome:r(),height:window.innerHeight+81,width:window.innerWidth}}window.Pikabu=function(e){var i=t.extend(this,{$document:t("html"),leftVisibleClass:"m-pikabu-left-visible",rightVisibleClass:"m-pikabu-right-visible",activePikabuStylesSelector:"#m-pikabu-styles",settings:{viewportSelector:".m-pikabu-viewport",selectors:{element:".m-pikabu-container",common:".m-pikabu-sidebar",left:".m-pikabu-left",right:".m-pikabu-right",overlay:".m-pikabu-overlay",navToggles:".m-pikabu-nav-toggle"},widths:{left:"80%",right:"80%"},transitionSpeed:.2,onInit:function(){},onOpened:function(){},onClosed:function(){}}});return i.init(e),i},Pikabu.prototype.scrollTo=function(t,e,i){var s=function(t,e,i){return t+(e-t)*i},n=function(t){return-Math.cos(t*Math.PI)/2+.5},t=t||(this.device.isAndroid?1:0),e=e||200;"function"==typeof i&&(n=i),Date.now=Date.now||function(){return+new Date};var o=window.pageYOffset,r=Date.now(),a=r+e,l=function(){var i=+new Date,h=i>a?1:(i-r)/e;window.scrollTo(0,s(o,t,n(h))),i>a||setTimeout(l,15)};l()},Pikabu.prototype.init=function(i){var s=this.settings;t("html").removeClass("no-js"),this.device=Pikabu.prototype.device||e(),this.markDeviceCharacteristics(),t.extend(!0,s,i),this.$viewport=t(this.settings.viewportSelector),this.$element=t(s.selectors.element),this.$sidebars={left:t(s.selectors.left),right:t(s.selectors.right)},this.$navToggles=t(s.selectors.navToggles),t(s.selectors.overlay).length||this.$element.prepend('<div class="'+s.selectors.overlay.slice(1)+'">'),this.$overlay=t(s.selectors.overlay),this.applyPersistentStyles(),this.bindHandlers(),this.bindEvents(),this.$sidebars.left.addClass("m-pikabu-hidden"),this.$sidebars.right.addClass("m-pikabu-hidden"),this.settings=s,this.setViewportWidth(),this.$element.trigger("pikabu:initialized")},Pikabu.prototype.bindEvents=function(){this.$element.on("pikabu:initialized",this.settings.onInit),this.$element.on("pikabu:opened",this.settings.onOpened),this.$element.on("pikabu:closed",this.settings.onClosed)},Pikabu.prototype.bindHandlers=function(){var e=this;this.$navToggles.on("click",function(i){i.stopPropagation(),e.openSidebar(t(this).attr("data-role"))}),this.$overlay.on("click",function(t){t.stopPropagation(),e.closeSidebars()}),t(window).on("resize orientationchange",function(){var i=t(window).height();e.activeSidebar?(e.setHeights(),e.setViewportWidth()):(e.$sidebars.left.is(":visible")||e.$sidebars.right.is(":visible"))&&(e.$viewport.height(i),e.$sidebars.left.height(i),e.$sidebars.right.height(i))})},Pikabu.prototype.markDeviceCharacteristics=function(){this.device.hasOverflowScrollingTouch&&this.$document.addClass("m-pikabu-overflow-scrolling"),this.device.isLegacyAndroid&&this.$document.addClass("m-pikabu-legacy-android"),this.device.supportsTransitions&&this.$document.addClass("m-pikabu-transitions"),this.device.has3d&&this.$document.addClass("m-pikabu-translate3d")},Pikabu.prototype.applyPersistentStyles=function(){var t=this.settings.selectors.common+", \n"+this.settings.selectors.element,e="."+this.leftVisibleClass+" "+this.settings.selectors.left,i="."+this.rightVisibleClass+" "+this.settings.selectors.right,s="<style>\n"+t+" {\n"+"-webkit-transition: -webkit-transform "+this.settings.transitionSpeed+"s ease-in;\n"+"-moz-transition: -moz-transform "+this.settings.transitionSpeed+"s ease-in;\n"+"-ms-transition: -ms-transform "+this.settings.transitionSpeed+"s ease-in;\n"+"-o-transition: -o-transform "+this.settings.transitionSpeed+"s ease-in;\n"+"transition: transform "+this.settings.transitionSpeed+"s ease-in;\n"+"}\n"+e+" {\n"+"	width: "+this.settings.widths.left+";\n"+"}\n"+i+" {\n"+"	width: "+this.settings.widths.right+";\n"+"}"+"</style>";this.$document.find("head").append(s)},Pikabu.prototype.applyTransformations=function(t){var e,i;e=this.settings.widths[t],i="left"===t?e:"-"+e;var s='<style id="'+this.activePikabuStylesSelector.slice(1)+'">\n'+this.settings.selectors.element+" {\n"+"	-webkit-transform: translate3d("+i+", 0, 0);\n"+"	-moz-transform: translate3d("+i+", 0, 0);\n"+"	-ms-transform: translate3d("+i+", 0, 0);\n"+"	-o-transform: translate3d("+i+", 0, 0);\n"+"	transform: translate3d("+i+", 0, 0);\n"+"}\n"+this.settings.selectors[t]+" {\n"+"	-webkit-transform: translate3d(0, 0, 0);\n"+"	-moz-transform: translate3d(0, 0, 0);\n"+"	-ms-transform: translate3d(0, 0, 0);\n"+"	-o-transform: translate3d(0, 0, 0);\n"+"	transform: translate3d(0, 0, 0);\n"+"}"+"</style>";this.$document.find("head").append(s)},Pikabu.prototype.openSidebar=function(t){this.scrollOffset=window.pageYOffset,this.$sidebars[t].removeClass("m-pikabu-hidden"),this.activeSidebar=t,this.$sidebars[t].addClass("m-pikabu-overflow-touch"),this.$document.addClass("m-pikabu-"+t+"-visible"),this.setHeights(),this.setViewportWidth(),this.applyTransformations(t),this.scrollTo(0),this.$element.trigger("pikabu:opened")},Pikabu.prototype.resetSidebar=function(t){t.removeClass("m-pikabu-overflow-touch"),this.$viewport.css("height",""),this.$element.css("height",""),this.$element.css("marginBottom",1),this.scrollTo(0),this.$element.css("marginBottom",""),this.$sidebars.left.addClass("m-pikabu-hidden"),this.$sidebars.right.addClass("m-pikabu-hidden"),this.activeSidebar=null,this.$element.trigger("pikabu:closed")},Pikabu.prototype.closeSidebars=function(){var e=this;this.$document.removeClass(this.leftVisibleClass+" "+this.rightVisibleClass),this.$viewport.css("width","auto"),t(this.activePikabuStylesSelector).remove(),this.device.transitionEvent&&this.activeSidebar?this.$element.one(this.device.transitionEvent,function(){e.resetSidebar(t(this)),e.scrollTo(e.scrollOffset)}):setTimeout(function(){e.resetSidebar(t(this)),e.scrollTo(e.scrollOffset)},250)},Pikabu.prototype.setViewportWidth=function(){var t="auto";this.device.isLegacyAndroid&&0==orientation&&(t=Math.max(this.device.height,this.device.width)),this.$viewport.css("width",t)},Pikabu.prototype.setHeights=function(){var e=this.device.isNewChrome?window.outerHeight:t(window).height(),i=this.activeSidebar&&this.$sidebars[this.activeSidebar],s=i.removeAttr("style")[0].scrollHeight,n=Math.max(e,s);this.device.hasOverflowScrollingTouch?(i.height(e),this.$element.height(e),this.$viewport.height(e),this.$overlay.height(e)):(i.height(n),this.$viewport.height(n),this.$overlay.height(n),this.$element.height(n))}}(Mobify.$);

// fastclick 1.0.3
(function(){"use strict";function e(t,r){function s(e,t){return function(){return e.apply(t,arguments)}}var i;r=r||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=r.touchBoundary||10;this.layer=t;this.tapDelay=r.tapDelay||200;this.tapTimeout=r.tapTimeout||700;if(e.notNeeded(t)){return}var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var u=this;for(var a=0,f=o.length;a<f;a++){u[o[a]]=s(u[o[a]],u)}if(n){t.addEventListener("mouseover",this.onMouse,true);t.addEventListener("mousedown",this.onMouse,true);t.addEventListener("mouseup",this.onMouse,true)}t.addEventListener("click",this.onClick,true);t.addEventListener("touchstart",this.onTouchStart,false);t.addEventListener("touchmove",this.onTouchMove,false);t.addEventListener("touchend",this.onTouchEnd,false);t.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;if(e==="click"){i.call(t,e,n.hijacked||n,r)}else{i.call(t,e,n,r)}};t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;if(e==="click"){i.call(t,e,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(t,e,n,r)}}}if(typeof t.onclick==="function"){i=t.onclick;t.addEventListener("click",function(e){i(e)},false);t.onclick=null}}var t=navigator.userAgent.indexOf("Windows Phone")>=0;var n=navigator.userAgent.indexOf("Android")>0&&!t;var r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t;var i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var s=r&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);var o=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(r&&e.type==="file"||e.disabled){return true}break;case"label":case"iframe":case"video":return true}return/\bneedsclick\b/.test(e.className)};e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};e.prototype.sendClick=function(e,t){var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};e.prototype.determineEventType=function(e){if(n&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};e.prototype.focus=function(e){var t;if(r&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};e.prototype.updateScrollParent=function(e){var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};e.prototype.getTargetElementFromEventTarget=function(e){if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};e.prototype.onTouchStart=function(e){var t,n,s;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(r){s=window.getSelection();if(s.rangeCount&&!s.isCollapsed){return true}if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true};e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};e.prototype.onTouchMove=function(e){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};e.prototype.findControl=function(e){if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};e.prototype.onTouchEnd=function(e){var t,o,u,a,f,l=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}if(e.timeStamp-this.trackingClickStart>this.tapTimeout){return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;o=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(s){f=e.changedTouches[0];l=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||l;l.fastClickScrollParent=this.targetElement.fastClickScrollParent}u=l.tagName.toLowerCase();if(u==="label"){t=this.findControl(l);if(t){this.focus(l);if(n){return false}l=t}}else if(this.needsFocus(l)){if(e.timeStamp-o>100||r&&window.top!==window&&u==="input"){this.targetElement=null;return false}this.focus(l);this.sendClick(l,e);if(!r||u!=="select"){this.targetElement=null;e.preventDefault()}return false}if(r&&!i){a=l.fastClickScrollParent;if(a&&a.fastClickLastScrollTop!==a.scrollTop){return true}}if(!this.needsClick(l)){e.preventDefault();this.sendClick(l,e)}return false};e.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};e.prototype.onMouse=function(e){if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};e.prototype.onClick=function(e){var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};e.prototype.destroy=function(){var e=this.layer;if(n){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};e.notNeeded=function(e){var t;var r;var i;if(typeof window.ontouchstart==="undefined"){return true}r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(r){if(n){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(r>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(o){i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(i[1]>=10&&i[2]>=3){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(e.style.msTouchAction==="none"){return true}if(e.style.touchAction==="none"){return true}return false};e.attach=function(t,n){return new e(t,n)};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return e})}else if(typeof module!=="undefined"&&module.exports){module.exports=e.attach;module.exports.FastClick=e}else{window.FastClick=e}})();

// overscroll
// (function(){var e,d,g,f,c=0,b=0,a;document.addEventListener("touchstart",function(h){clearInterval(a);g=h.target;f=h.target;while((window.getComputedStyle(g)["overflow-x"]!="auto"&&window.getComputedStyle(g)["overflow-x"]!="scroll")||g.parentNode==null){g=g.parentNode}while((window.getComputedStyle(f)["overflow-y"]!="auto"&&window.getComputedStyle(f)["overflow-y"]!="auto")||f.parentNode==null){f=f.parentNode}if(g.parentNode==null){g=null}if(f.parentNode==null){f=null}var i=h.touches[0];e=i.pageX;d=i.pageY},false);document.addEventListener("touchmove",function(h){clearInterval(a);h.preventDefault();var i=h.touches[0];g.scrollLeft=g.scrollLeft-(i.pageX-e);f.scrollTop=f.scrollTop-(i.pageY-d);c=(i.pageX-e);b=(i.pageY-d);e=i.pageX;d=i.pageY},false);document.addEventListener("touchend",function(h){clearInterval(a);a=setInterval(function(){g.scrollLeft=g.scrollLeft-c;f.scrollTop=f.scrollTop-b;c=c*0.9;b=b*0.9;if(c<1&&c>-1&&b<1&&b>-1){clearInterval(a)}},15)},false)})();



var overflow=function(el){el.addEventListener('touchstart',function(){var top=el.scrollTop,totalScroll=el.scrollHeight,currentScroll=top+el.offsetHeight
if(top===0){el.scrollTop=1}else if(currentScroll===totalScroll){el.scrollTop=top-1}})
el.addEventListener('touchmove',function(evt){if(el.offsetHeight<el.scrollHeight)
evt._isScroller=true})}
overflow(document.querySelector('.scroll'));document.body.addEventListener('touchmove',function(evt){if(!evt._isScroller){evt.preventDefault()}});

