import React, { Component } from 'react'
import Tabs from '../blocks/Tabs'
import { Block, Block2 } from '../blocks/Lorem'
class AboutPage extends Component {
	render(){
		
		return (
			<section className="content product tabs">
				<div className="container">
					<Tabs 
						firstTabName={"History"} 
						secondTabName={"Management"} 
						firstBlock={Block} 
						secondBlock={Block2} 
						/>
				</div>
			</section>
		)
	}
}

export default AboutPage
