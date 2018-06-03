import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Block } from '../blocks/Lorem'

const mapStateToProps = state => {
	return {
		homelist: state.productsReducer.home,
		officelist: state.productsReducer.office
	}
}

class ProductsPage extends Component {
	render(){
		return (
			<section className="content product">
				<div className="container">
					{ Block }
				</div>
			</section>
		)
	}
}

export default connect(mapStateToProps, )(ProductsPage)