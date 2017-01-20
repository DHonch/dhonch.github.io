window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if ( scrolled > 100 ) {
  	 document.getElementByClass('scrollblock');
  	 el.classList.add("bg-for-scrollblock");

  }
}
