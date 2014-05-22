jQuery(document).ready(function($) {
	$('#normal-button').toolbar({content: '#user-options', position: 'bottom'});
	$('#normal-button').on('toolbarItemClick', function(event) {
		window.location = arguments[1];
	});
});