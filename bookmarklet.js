javascript:(function() {
	var watchElement = null,
		posCache = {
			leftToRight: null,
			frontToBack: null,
			compass: null,
			referencePoint: false
		},
		handleTouch = {
	  		handleEvent: function() {
	  			posCache['referencePoint'] = posCache.frontToBack;
	  		}
	  	},
	  	handleRelease = {
	  		handleEvent: function() {
	  			posCache['referencePoint'] = false;
	  		}
	  	},
	  	eventsToHandle = 'ontouchstart' in window ? { start: 'touchstart', end: 'touchend' } : { start: 'mousedown', end: 'mouseup' };

	if (window.DeviceOrientationEvent) {

		document.getElementsByTagName('head')[0].innerHTML += '<style>#autoscroll___toScroll{position:fixed;width:0;height:0;border-style:solid;border-width:0 0 80px 80px;border-color:transparent transparent #007bff;line-height:0;bottom:0;right:0;opacity:.3}#autoscroll___toScroll:active{border-color:transparent transparent red;opacity:1}</style>';

		document.body.innerHTML += '<div id="autoscroll___toScroll"></div>';
		watchElement = document.getElementById('autoscroll___toScroll');

		if (watchElement) {
		  	window.addEventListener('deviceorientation', function(eventData) {
		    	posCache['leftToRight'] = eventData.gamma;
		    	posCache['frontToBack'] = eventData.beta;
		    	posCache['compass'] = eventData.alpha;

		    	deviceOriented();
		  	}, false);

		  	watchElement.addEventListener(eventsToHandle.start, function() {
	  			posCache['referencePoint'] = posCache.frontToBack;
	  		}, false);

		  	watchElement.addEventListener(eventsToHandle.end, function() {
	  			posCache['referencePoint'] = false;
	  		}, false);

		}
	}

	function deviceOriented() {
		var ts = watchElement,
			ref = posCache['referencePoint'],
			beta = posCache['frontToBack'];

		if (typeof(ref) == 'number') {
			var dist = (beta * 1.2) - ref;
			window.scrollBy(0, dist);
		}
	}
})();
