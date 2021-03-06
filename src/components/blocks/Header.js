import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import cn from 'classnames'

const Header = ({location, MenuItems }) => {

	const { pathname } = location
	const menuItems = MenuItems.map((menu)=>
		<li key={ menu.name }>
			<span>
				<NavLink to={ menu.url } activeStyle={{ textDecoration: 'underline #ff002e' }}>{ menu.name }</NavLink>
			</span>
		</li>
	)

	return (
		<section className={ cn('header', { 'index_layer': pathname === '/home' } )}>
			<div className="container">
				<div className="column serv">
					<div className="logo">
						<NavLink to="/home">
							<img src="images/icon_logo.svg" alt="Logotype"/>
						</NavLink>
					</div>
				</div>
				<div className="column menu">
					<ul className="top_menu slide_up_text">
						{ menuItems }
					</ul>
				</div>
				<div className="column feedback">
					<div className="feedback_container">
						<NavLink className="inner" to="/feedback" activeStyle={{ textDecoration: 'underline #ff002e' }}>
							<img src="images/icon_cart.svg" alt="Cart" />
							<span>Free Quote</span>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	)
}

export default withRouter(Header)
