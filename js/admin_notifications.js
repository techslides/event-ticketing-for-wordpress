jQuery(document).ready(function($) {

	$('#wpet_admin_notification_add').submit(function() {
		//do validation
		if ( ! ( $( '#all-attendees' ).checked || 
			$( '#attendees-have-info' ).checked ) ) {
            alert( wpet_notifications_add.send_to_required );
            return false;
        }

		if ( jQuery.trim( $( '#options\\[subject\\]' ).val() ) == '' ) {
				alert( wpet_notifications_add.subject_required );
				return false;
		}

		if ( jQuery.trim( $( '#options\\[email_body\\]' ).val() ) == '' ) {
				alert( wpet_notifications_add.body_required );
				return false;
		}

		return true;
	});
});