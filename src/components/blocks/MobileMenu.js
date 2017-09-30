import React, {Component} from 'react'
import { NavLink, Link } from 'react-router-dom'
import cn from 'classnames'
import { connect } from 'react-redux'

import {LocationsOpener} from './'


const mapStateToProps = state => {
	return { HamburgerOn: state.uiReducer.HamburgerOn }
}

class MobileMenu extends Component {

	render(){
		const menuItems = this.props.MenuItems.map((menu)=>(
			<li key={menu.name}>
				<span>
					<NavLink to={menu.url} activeStyle={{ color: 'white' }}>{menu.name}</NavLink>
				</span>
			</li>
			)
		);
		let condition = this.props.HamburgerOn;
	
		return (
			<section className={ cn('mobile_menu', { 'mobile_menu-active': condition }) }>
				<div className="container">
					<LocationsOpener/>
					<ul className="mobile_menu_list slide_up_text">
						{menuItems}
					</ul>
					<ul className="mobile_menu_feedback slide_up_text">
						<li className="feedback_container">
							<Link className="inner" to="/feedback">
								<img src="images/icon_cart.svg" alt="Cart" />
								<span>Free Quote</span>
							</Link>
						</li>
					</ul>
				</div>
			</section>
		)
		
	}
	
}

export default connect(mapStateToProps)(MobileMenu)