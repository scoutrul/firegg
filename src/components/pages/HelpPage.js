import React, { Component} from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'


const mapStateToProps = state => {
	return {
		help: state.helpReducer
	}
}

class HelpPage extends Component{
	constructor(props){
		super(props)
	}

	componentDidMount() {
	  	let accoirdion_toggle = $('.accordion_items header');
	  	accoirdion_toggle.each(function(i, el) {
	  	    $(el).click(function() {
	  	        $(el).toggleClass('active');
	  	    })
	  	});
	}

	render(){
		const items = this.props.help.map((item, i) => (
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

}

export default connect(mapStateToProps, )(HelpPage)