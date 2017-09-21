import React from 'react'
import { connect } from 'react-redux'

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