import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import Tabs from '../blocks/Tabs'

const mapStateToProps = state => {
	return {
		homelist: state.productsReducer.home,
		officelist: state.productsReducer.office
	}
}

class ProductsPage extends Component {
	render(){
		return (
			<section className="content product tabs">
				<div className="container">
					<Tabs 
						firstTabName={"Home Solutions"} 
						secondTabName={"Office Solutions"} 
						firstList={this.props.officelist} 
						secondList={this.props.homelist} />
				</div>
			</section>
		)
	}
}

export default connect(mapStateToProps, )(ProductsPage)