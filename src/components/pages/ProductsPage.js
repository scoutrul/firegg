import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import { ProductsListHome, ProductsListOffice } from '../blocks/ProductsList'



const mapStateToProps = state => {
	return {
		home: state.productsReducer.home,
		office: state.productsReducer.office
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
					<ProductsListHome list={this.props.home}/>
				</ul>
			)	
		}
		const ProductsForOffice = () => {
			return (
				<ul className="product-list slide_up_text" id="officelist">
					<ProductsListOffice list={this.props.office}/>
				</ul>
			)	
		}

		const HomeActive = () => {
			this.setState({homeTab: true})
		}
		const OfficeActive = () => {
			this.setState({homeTab: false})
		}
		return (
			<section className="content product">
				<div className="container">
					<ul id="productsSwitcher">
						<li onClick={HomeActive} className={cn({'active': this.state.homeTab})}>Home</li>
						<li onClick={OfficeActive} className={cn({'active': !this.state.homeTab})}>Office</li>
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