import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

let accoirdion_toggle = $('.accordion_items header');
accoirdion_toggle.each(function(i, el) {
    $(el).click(function() {
        $(el).toggleClass('active');
    })
    $(el).siblings('.delete').click(function() {
        $(el).parents('.product').hide('slow');

        setTimeout(function() { // demo for empty cart
            $(el).parents('.product').remove();
            //temp
            $('.is-empty').show();
            $('.cart-inner').hide();
        }, 1000);

    })
});

const mapStateToProps = state => {
	return {
		help: state.helpReducer
	}
}

function HelpPage(props){

	const items = props.help.map((item, i) => (
			<li key={i}>
				<span>
					<header>{ item.question }</header>
					<main>{ item.answer }</main>
				</span>
			</li>
	));

	return (
		<section className="content help">
			<div className="container">
				<ul className="faq slide_up_text accordion_items">
					{ items }
				</ul>
			</div>
		</section>
	)
}

export default connect(mapStateToProps, )(HelpPage)