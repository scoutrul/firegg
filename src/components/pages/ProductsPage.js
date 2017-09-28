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
			<section className="content product">
				<div className="container">
					<ul id="productsSwitcher">
						<li onClick={()=>this.setState({homeTab: true})} className={cn({'active': this.state.homeTab})}>Home</li>
						<li onClick={()=>this.setState({homeTab: false})} className={cn({'active': !this.state.homeTab})}>Office</li>
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