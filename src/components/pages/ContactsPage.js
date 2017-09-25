import React from 'react'
import $ from 'jquery'

// CONTACT toggle tabs module
let address_Header = $('ul.office-tab li');
address_Header.each(function(i, el) {
    $('#offices address').hide();
    $('#offices address:nth-child(1)').show();
    address_Header.first()
    $('ul.office-tab li:nth-child(1)').addClass('office-tab--active');
    $(el).click(function() {
        $('.office-tab--active').removeClass('office-tab--active');
        $('#offices address').hide();
        $(`ul.office-tab li:nth-child(${i+1})`).addClass('office-tab--active');
        $(`#offices address:nth-child(${i+1})`).show();
    })
});

function ContactsPage(){
	return (
		<section className="content">
			ContactsPage
		</section>
	)
	
}

export default ContactsPage