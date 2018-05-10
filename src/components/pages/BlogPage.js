import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import { Lorem,  } from '../blocks/'



const mapStateToProps = state => {
	return {
		homelist: state.productsReducer.home,
		officelist: state.productsReducer.office
	}
}

class ProductsPage extends Component {

	constructor(){
		super();
		this.state = {
			homeTab: true
		}
	}

	render(){

		return (
			<section className="content product">
				<div className="container">
					<ul id="productsSwitcher">
						<li onClick={()=>this.setState({homeTab: true})} className={cn({'active': this.state.homeTab})}>Blog</li>
						<li onClick={()=>this.setState({homeTab: false})} className={cn({'active': !this.state.homeTab})}>Podcast</li>
					</ul>
					<Lorem/>
				</div>
			</section>
		)
	}
}

export default connect(mapStateToProps, )(ProductsPage)