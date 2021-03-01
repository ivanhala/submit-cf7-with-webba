function wbk_on_form_rendered( service ){
    jQuery('#wbk-book_appointment').css('visibility','hidden');
    jQuery('.wbk-inner-container').find('.wpcf7 > form').each(function () {
        wpcf7.init(jQuery(this)[0]);        
    });
    var form_id = jQuery('.wbk-inner-container').find("input[name='_wpcf7']").val();
    document.addEventListener( 'wpcf7submit', function( event ) {
        if ( form_id == event.detail.contactFormId ) {
            jQuery('#wbk-book_appointment').trigger('click');
             
      }
    }, false );  
}
