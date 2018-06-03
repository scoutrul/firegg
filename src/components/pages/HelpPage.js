import React, { Component} from 'react'
import { connect } from 'react-redux'
import Tabs from '../blocks/Tabs'
import { Block2 } from '../blocks/Lorem'

const mapStateToProps = state => {
	return {
		help: state.helpReducer
	}
}

class HelpPage extends Component{

	handleClick = (e) => {
		let target = e.currentTarget;
		target.className === 'active' ? target.className = '' : target.className = 'active';
	}

	render(){

		const renderContent = (
			<ul className="faq slide_up_text accordion_items">
				{
					this.props.help.map((item, i) => 
						<li key={i}>
							<span>
								<header onClick={(e) => this.handleClick(e)}>{ item.question }</header> 
								<main>{ item.answer }</main>
							</span>
						</li>
					)
				}
			</ul>
		)
		return (
			<section className="content help tabs">
				<div className="container">
					<Tabs 
						firstTabName={"FAQ"} 
						secondTabName={"Demos"} 
						firstBlock={renderContent} 
						secondBlock={Block2} 
						/>
				</div>
			</section>
		)
	}

}

export default connect(mapStateToProps, )(HelpPage)