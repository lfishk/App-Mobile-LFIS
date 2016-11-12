(function($){
  $(function(){

	$('.button-collapse').sideNav({
		  menuWidth: 240, // Default is 240
		}
	);

	// Initialize collapsible (uncomment the line below if you use the dropdown variation)
	$('.collapsible').collapsible();	
	
	
    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'});
    }	
	
  }); // end of document ready
})(jQuery); // end of jQuery name space


  
  
