import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

import {LocationChooser} from './pages/blocks/LocationChooser'

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
	
		return (
			<section className="mobile_menu">
				<div className="container">
					<LocationChooser/>
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


export default MobileMenu