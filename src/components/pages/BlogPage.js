import React, { Component } from 'react'
import { connect } from 'react-redux'

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
					<section className="content">
						BLOG
					</section>
				</div>
			</section>
		)
	}
}

export default connect(mapStateToProps, )(ProductsPage)