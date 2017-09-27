import React, { Component} from 'react'
import { connect } from 'react-redux'


const mapStateToProps = state => {
	return {
		help: state.helpReducer
	}
}

class HelpPage extends Component{

	handleClick = (e) => {
		let target = e.currentTarget;
		(target.className === 'active')? target.className = '' : target.className = 'active';
	}

	render(){
		const items = this.props.help.map((item, i) => {
			return(
				<li key={i}>
					<span>
						<header onClick={(e) => this.handleClick(e)}>{ item.question }</header> 
						<main>{ item.answer }</main>
					</span>
				</li>
			)
		})

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