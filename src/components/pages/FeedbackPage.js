import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

// feedback form 
$(function(){
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
	
})

function FeedbackPage(){
	return (
		<section className="content feedback">
			<div className="container">
				<div className="feedback_form">
					<div className="title slide_up_text">
						<div>
							<span>Fill your info &</span>
						</div>
						<div>
							<span>get free quote now</span>
						</div>
					</div>

					<form id="feedback" autocomplete="off" name="feedback">
						<div className="field">
							<input id="full_name" type="text" />
							<label for="full_name">
								<span>Full Name</span>
							</label>
						</div>
						<div className="field">
							<input id="e_mail" type="email" />
							<label for="e_mail">
								<span>E-mail address</span>
							</label>
						</div>
						<div className="field">
							<input id="phone_number" type="text" />
							<label for="phone_number">
								<span>Phone number</span>
							</label>
						</div>
						<div className="field">
							<input id="street_address" type="text" />
							<label for="street_address">
								<span>Street Address</span>
							</label>
						</div>
						<div className="field">
							<input id="street_address2" type="email" /> 
							<label for="street_address2">
								<span>Street Address2</span>
							</label>
						</div>
						<div className="thin">
							<div className="field">
								<input id="city" type="email" />
								<label for="city"> 
									<span>City</span>
								</label>
							</div>
							<div className="field" style={{margin: "0 0.5rem"}}>
								<input id="state" type="email" />
								<label for="state"> 
									<span>State</span>
								</label>
							</div>
							<div className="field">
								<input id="zip" type="email" />
								<label for="zip"> 
									<span>ZIP Code</span>
								</label>
							</div>
						</div>
					</form>
					<button className="center red" id="feedback_submit">
						<div className="button_inner">
							<div className="arrows"></div>
							<div className="message">Get quotes</div>
						</div>
					</button>
				</div>

				<div className="feedback_send">
					<div className="title slide_up_text">
						<div>
							<span>Quote has been sent!</span>
							<span className="title2">Check your inbox for mote information.</span>
						</div>
					</div>

					<button className="center red">
						<Link className="button_inner" to="/products">
							<div className="arrows"></div>
							<div className="message">View Products</div>
						</Link>
					</button>
				</div>
			</div>
		</section>
	)
	
}

export default FeedbackPage