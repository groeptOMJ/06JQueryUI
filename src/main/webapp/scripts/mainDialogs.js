//Example Dialogs


$(function() {
		var name = $( "#name" ),tips = $( ".validateTips" ),
		allFields = $( [] ).add( name );
		$( "#dialog" ).dialog();
		$( "#dialog2" ).dialog({
			autoOpen: false,
			show: {
				effect: "blind",
				duration: 1000
			},hide: {
				effect: "explode",
				duration: 1000
			}
		});
		$( "#dialog3" ).dialog({
			autoOpen:false,
			resizable: false,
			modal: true,
			buttons: {
				"YES": function() {
					$( this ).dialog( "close" );
					$( "#names tbody" ).html( "<tr>" +
							"<td>demo</td>" +
						"</tr>" );
					$( "#dialog2" ).dialog( "close" );
					$( "#dialog" ).dialog( "open" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
		});
		$( "#dialog4" ).dialog({
			autoOpen: false,
			height: 300,
			width: 350,
			modal: true,
			buttons: {
				"Register your name": function() {
					var bValid = true;
					allFields.removeClass( "ui-state-error" );

					bValid = checkLength( name, "name", 3, 16 );

					if ( bValid ) {
						$( "#names tbody" ).append( "<tr>" +
							"<td>" + name.val() + "</td>" +
						"</tr>" );
						$( this ).dialog( "close" );
					}
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
				allFields.val( "" ).removeClass( "ui-state-error" );
			}
		});
	
		$( "#opener" ).button().click(function() {
			$( "#dialog" ).dialog( "close" );
			$( "#dialog2" ).dialog( "open" );
		});

		$( "#opener2" ).button().click(function() {			
			$( "#dialog3" ).dialog( "open" );
		});
		$( "#opener3" ).button().click(function() {
			$( "#dialog4" ).dialog( "open" );
		});
		
});
function checkLength( o, n, min, max ) {
	if ( o.val().length > max || o.val().length < min ) {
		o.addClass( "ui-state-error" );
		updateTips( "Length of " + n + " must be between " +
			min + " and " + max + "." );
		return false;
	} else {
		return true;
	}
}
function updateTips( t ) {
	$("P.validateTips")
		.text( t )
		.addClass( "ui-state-highlight" );
	setTimeout(function() {
		$("P.validateTips").removeClass( "ui-state-highlight", 1500 ).text("");
	}, 1500 );
}
