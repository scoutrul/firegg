import React from 'react'
import $ from 'jquery'
import appearModule from '../../js/appearModule'

$(function() {
	$('.language .name a').each(function(i, el) {
	    $(el).click(function() { // click on name
	        $('.language').hide();
	        $('#choose .slide_up_text--active').removeClass('slide_up_text--active');
	        $('.regions ul').hide();
	        $(`.regions ul:nth-child(${i+1})`).show(); // show closest region list w animation
	        appearModule.addToAllClasses();
	    })
	});

	let ChooseWindowVis = false;
	$('.location_toggle').click(function() {
	    $('.regions ul').hide();
	    if (ChooseWindowVis) {
	        $('#choose').removeClass('choose--active');
	        $('#choose .slide_up_text--active').removeClass('slide_up_text--active');
	        $('.language').show()
	        ChooseWindowVis = !ChooseWindowVis;
	    } else {
	        $('#choose').addClass('choose--active');
	        appearModule.addToAllClasses();
	        ChooseWindowVis = !ChooseWindowVis;
	    }
	});
})

export const LocationChooser = () => {
	return(
		<div className="location location_toggle ">
			<img src="images/icon_marker.svg" alt="Location"/>
			<span>Jamaica</span>
		</div>
	)
}
