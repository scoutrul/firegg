import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import Tabs from '../blocks/Tabs'

class AboutPage extends Component {
	render(){

		const Block = (<div>Lorem ipsum</div>)
		
		return (
			<section className="content product tabs">
				<div className="container">
					<Tabs 
						firstTabName={"History"} 
						secondTabName={"Management"} 
						firstBlock={Block} 
						secondBlock={Block} 
						/>
				</div>
			</section>
		)
	}
}

export default AboutPage