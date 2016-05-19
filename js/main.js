var dropdown = $('.nav-dropdown');
var button = $('.nav-button');

$( '.close' ).on( 'click', function() {
	dropdown.removeClass('open');
	button.removeClass('open');
} )

$( '.nav-button' ).on( 'click', function() {

	if ( $( document ).width() > 600 ) {

		button.addClass('open')	;

		setTimeout(function(){
		dropdown.addClass('open');

		}, 700 );	
	} else {
		dropdown.addClass('open');
	}

});
