import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import cn from 'classnames'
import {LocationChooser} from './pages/blocks/LocationChooser'

class HeaderMenu extends Component {
	render(){
		const {pathname} = this.props.location;
		const menuItems = this.props.MenuItems.map((menu)=>(
			<li key={menu.name}>
				<span>
					<NavLink to={menu.url} activeStyle={{ color: 'white' }}>{menu.name}</NavLink>
				</span>
			</li>
			)
		);
	
		return (
			<section className={ cn('header', { 'index_layer': pathname === '/' } )}>
				<div className="container">
					<div className="column serv">
						<div className="logo">
							<NavLink to="/">
								<img src="images/icon_logo.svg" alt="Logotype"/>
							</NavLink>
						</div>
						<LocationChooser/>
					</div>
					<div className="column menu">
						<ul className="top_menu slide_up_text">
							{menuItems}
						</ul>
					</div>
					<div className="column feedback">
						<div className="feedback_container">
							<Link className="inner" to="/feedback">
								<img src="images/icon_cart.svg" alt="Cart" />
								<span>Free Quote</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


export default withRouter(HeaderMenu)