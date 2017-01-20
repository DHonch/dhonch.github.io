

	
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


  var elem = document.querySelector(".scrollblockjs3");
  if ( scrolled >= 1400 & scrolled <= 1600 ){
  	 elem.classList.add("bg-for-scrollblock");
  		} else if ( scrolled <= 1600 ){
  			 elem.classList.remove("bg-for-scrollblock");
  		} 
		  	else  {
		  		 elem.classList.remove("bg-for-scrollblock");
		  	} 

  var elem = document.querySelector(".scrollblockjs4");
  if ( scrolled >= 1800  ){
  	 elem.classList.add("bg-for-scrollblock");
  		} else if ( scrolled <= 2300 ){
  			 elem.classList.remove("bg-for-scrollblock");
  		} 
		  	else  {
		  		 elem.classList.remove("bg-for-scrollblock");
		  	} 				  
};
	
