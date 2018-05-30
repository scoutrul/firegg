import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import { ProductsListHome, ProductsListOffice } from '../blocks/ProductsList'



const mapStateToProps = state => {
	return {
		homelist: state.productsReducer.home,
		officelist: state.productsReducer.office
	}
}

class AboutPage extends Component {

	constructor(){
		super();
		this.state = {
			homeTab: true
		}
	}

	render(){
		const ProductsForHome = () => {
			return (
				<ul className="product-list slide_up_text" id="homelist">
					<ProductsListHome list={this.props.homelist}/>
				</ul>
			)	
		}
		const ProductsForOffice = () => {
			return (
				<ul className="product-list slide_up_text" id="officelist">
					<ProductsListOffice list={this.props.officelist}/>
				</ul>
			)	
		}

		return (
			<section className="content">
				<div className="container">
					CONTENT
				</div>
			</section>
		)
	}
}

export default connect(mapStateToProps, )(AboutPage)