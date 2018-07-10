(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('#alert_close').click(function(){
    $( "#alert_box" ).fadeOut( "slow", function() {
    });
});