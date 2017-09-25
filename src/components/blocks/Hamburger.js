import React from 'react'
import $ from 'jquery'
import appearModule from '../../js/appearModule'

$(function() {
	let Hamburger = false;
	$('#hamburger').click(function() {
	    if (Hamburger) {
	        Hamburger = !Hamburger;
	        $(this).removeClass('is-active');
	        $('.mobile_menu').removeClass('mobile_menu-active');

	    } else {
	        Hamburger = !Hamburger;
	        $(this).addClass('is-active');
	        $('.mobile_menu').addClass('mobile_menu-active');
	        $('.mobile_menu .slide_up_text--active').removeClass('slide_up_text--active');

	        appearModule.addToAllClasses
	    }
	});
})
const Hamburger = () => 
	<div id="hamburger" className="hamburger">
		<span className="hamburger-box">
			<span className="hamburger-inner"></span>
		</span>
	</div>
	
export default Hamburger