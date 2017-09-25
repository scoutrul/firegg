import React from 'react'
import $ from 'jquery'

// feedback form 
let feddback_form = $('form#feedback');
feddback_form.find('input').on('change click focus', function(){
    let title = $(this).siblings('label');
    ($(this).val()) ? title.addClass('active') : title.removeClass('active');
})

let feedback_submit = $('#feedback_submit');
let feddback_form_send = $('.feedback_send');
let feddback_form_container = $('.feedback_form');
feddback_form_send.hide();

feedback_submit.click(function(){ // was sending demo
    feddback_form_container.hide();
    feddback_form_send.show();
    $("html, body").animate({ scrollTop: $('.content.feedback').offset().top }, 1000);
})

function FeedbackPage(){
	return (
		<section className="content">
			FeedbackPage
		</section>
	)
	
}

export default FeedbackPage