jQuery(document).ready(function($) {
	$('#normal-button').toolbar({content: '#user-options', position: 'bottom'});
	$('#normal-button').on('toolbarItemClick', function(event) {
		window.open(arguments[1],'_blank');
	});
});