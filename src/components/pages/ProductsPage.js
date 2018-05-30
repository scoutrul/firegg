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

class ProductsPage extends Component {

	constructor(){
		super();
		this.state = {
			homeTab: true
		}
	}

	render(){
		const ProductsForHome = () => (
			<ul className="product-list slide_up_text" id="homelist">
				<ProductsListHome list={this.props.homelist}/>
			</ul>
		)
		
		const ProductsForOffice = () => (
			<ul className="product-list slide_up_text" id="officelist">
				<ProductsListOffice list={this.props.officelist}/>
			</ul>
		)

		return (
			<section className="content product">
				<div className="container">
					<ul id="productsSwitcher">
						<li onClick={()=>this.setState({homeTab: true})} className={cn({'active': this.state.homeTab})}>Home Solutions</li>
						<li onClick={()=>this.setState({homeTab: false})} className={cn({'active': !this.state.homeTab})}>Office Solutions</li>
					</ul>

					{
						(this.state.homeTab)?<ProductsForHome/>:<ProductsForOffice/>
					}
					
				</div>
			</section>
		)
	}
}

export default connect(mapStateToProps, )(ProductsPage)