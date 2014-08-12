tiltScroll
==========

Bookmarklet to add tilt scrolling to any website.

Adds a button to the bottom-right corner of the page. Holding this button activates tiltScroll. Releasing the button deactivates tiltScroll.

To use, minify bookmarklet.js and enter it as the location for a bookmark on your device. Click the bookmark you added whenever on a page where you want to activate tiltScroll.

Or, if you want to easily add the bookmarklet, <a href="https://github.com/dannyrich/tiltScroll#javascript:%28function%28%29{function%20s%28%29{var%20n=e,r=t[%22referencePoint%22],i=t[%22frontToBack%22];if%28typeof%20r==%22number%22%29{var%20s=i*1.2-r;window.scrollBy%280,s%29}}var%20e=null,t={leftToRight:null,frontToBack:null,compass:null,referencePoint:false},n={handleEvent:function%28%29{t[%22referencePoint%22]=t.frontToBack}},r={handleEvent:function%28%29{t[%22referencePoint%22]=false}},i=%22ontouchstart%22in%20window?{start:%22touchstart%22,end:%22touchend%22}:{start:%22mousedown%22,end:%22mouseup%22};if%28window.DeviceOrientationEvent%29{document.getElementsByTagName%28%22head%22%29[0].innerHTML+=%22%3Cstyle%3E#autoscroll___toScroll{position:fixed;width:0;height:0;border-style:solid;border-width:0%200%2080px%2080px;border-color:transparent%20transparent%20#007bff;line-height:0;bottom:0;right:0;opacity:.3}#autoscroll___toScroll:active{border-color:transparent%20transparent%20red;opacity:1}%3C/style%3E%22;document.body.innerHTML+=%27%3Cdiv%20id=%22autoscroll___toScroll%22%3E%3C/div%3E%27;e=document.getElementById%28%22autoscroll___toScroll%22%29;if%28e%29{window.addEventListener%28%22deviceorientation%22,function%28e%29{t[%22leftToRight%22]=e.gamma;t[%22frontToBack%22]=e.beta;t[%22compass%22]=e.alpha;s%28%29},false%29;e.addEventListener%28i.start,function%28%29{t[%22referencePoint%22]=t.frontToBack},false%29;e.addEventListener%28i.end,function%28%29{t[%22referencePoint%22]=false},false%29}}}%29%28%29;">Bookmark This Link</a>
