import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import $ from 'jquery'

let switchHome = $('#switchHome');
let switchOffice = $('#switchOffice');
let homelist = $('#homelist');
let officelist = $('#officelist');
const hideProducts = function(){
    $('.product-list').hide()
}; 
hideProducts();
homelist.show();
switchHome.toggleClass('active');

switchHome.click(function(){
    hideProducts();
    $('.product .slide_up_text').removeClass('slide_up_text--active');
    homelist.show();
    $(this).toggleClass('active').siblings('.active').toggleClass('active');
})
switchOffice.click(function(){
    hideProducts();
    $('.product .slide_up_text').removeClass('slide_up_text--active');
    officelist.show();
    $(this).toggleClass('active').siblings('.active').toggleClass('active');
})

const mapStateToProps = state => {
	return {
		home: state.productsReducer.home,
		office: state.productsReducer.office
	}
}

const ProductsPage = (props) => {
	const home = props.home.map((item, i) => {
		return (
			<li key={item.title}>
				<span>
					<Link to={`/product/home/${item.title.split(' ').join('_')}`}>{item.title}</Link>
				</span>
			</li>
		)
	})
	const office = props.office.map((item, i) => {
		return (
			<li key={item.title}>
				<span>
					<Link to={`/product/office/${item.title.split(' ').join('_')}`}>{item.title}</Link>
				</span>
			</li>
		)
	})

	return (
		<section className="content product">
			<div className="container">
				<ul id="productsSwitcher">
					<li id="switchHome">Home</li>
					<li id="switchOffice">Office</li>
				</ul>

				<ul className="product-list slide_up_text" id="homelist">
					{home}
				</ul>

				<ul className="product-list slide_up_text" id="officelist">
					{office}
				</ul>
			</div>
		</section>
	)
}

export default connect(mapStateToProps, )(ProductsPage)