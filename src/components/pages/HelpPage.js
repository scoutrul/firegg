import React, { Component} from 'react'
import { connect } from 'react-redux'
import Tabs from '../blocks/Tabs'

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

		const renderContent = (
			<ul className="faq slide_up_text accordion_items">
				{ items }
			</ul>
		)
		return (
			<section className="content tabs">
				<div className="container">
					<Tabs 
						firstTabName={"FAQ"} 
						secondTabName={"Demos"} 
						firstBlock={renderContent} 
						secondBlock={(<div>LOREM</div>)} 
						/>
				</div>
			</section>
		)
	}

}

export default connect(mapStateToProps, )(HelpPage)