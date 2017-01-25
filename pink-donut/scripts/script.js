

	/*
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var elem = document.querySelector(".scrollblock");
  if (  scrolled <= 900  ){
  	 elem.classList.add("bg-for-scrollblock");} 
  	 else {
  		 elem.classList.remove("bg-for-scrollblock");
  	} 


  var elem = document.querySelector(".scrollblockjs2");
  if ( scrolled >= 1000  & scrolled < 1300 ){
  	 elem.classList.add("bg-for-scrollblock");
  		} else if ( scrolled >= 1400 ){
  			 elem.classList.remove("bg-for-scrollblock");
  		} 
		  	else  {
		  		 elem.classList.remove("bg-for-scrollblock");
		  	} 				  
};
	*/

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var elem1 = document.querySelector(".ido");
  if (  scrolled >500  ){
     elem1.style.marginTop = "0";
     elem1.style.transitionDuration = "1.3s";
     elem1.style.opacity = "1";} 
     else {
    };
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var elem2 = document.querySelector(".works");
  if (  scrolled >1100  ){
     elem2.style.marginTop = "0";
     elem2.style.transitionDuration = "1.3s";
     elem2.style.opacity = "1";} 
     else {
    } ;
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var elem2 = document.querySelector(".about");
  if (  scrolled >2300  ){
     elem2.style.marginTop = "0";
     elem2.style.transitionDuration = "1.3s";
     elem2.style.opacity = "1";} 
     else {
    } ;
}