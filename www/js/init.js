(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.collapsible').collapsible();
  });
  
$('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
    }
);