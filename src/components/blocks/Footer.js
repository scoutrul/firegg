import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { 
		title1: state.footerReducer.title1,
		title2: state.footerReducer.title2,
		copy: state.footerReducer.copy,
		button: state.footerReducer.button,
	}
}

const Footer = ({ MenuItems, SocialItems, title1, title2, copy, button }) => {

		const menuItems = MenuItems.map((menu,i)=>
			<li key={menu.name}>
				<span>
					<NavLink to={menu.url} activeStyle={{ color: '#ff002e' }}>{menu.name}</NavLink>
				</span>
			</li>
		);
		const socialItems = SocialItems.map((social,i)=>
			<li key={social.name}>
				<span>
					<Link to={social.link} target="_blank">{social.name}</Link>
				</span>
			</li>
		)
		return (
			<section className="footer">
				<div className="container">
					<div className="footer-title">
						<h6 className="footer-slogan slide_up_text">
							<div style={{float: "left"}}>
								<span>{title1}&nbsp;</span>
							</div>
							<div>
								<span>{title2}</span>
							</div>
						</h6>
					</div>

					<div className="footer-menu">
						<ul className="slide_up_text">
							{menuItems}
						</ul>
						<ul className="footer-social slide_up_text">
							{socialItems}
						</ul>
					</div>
				</div>
				<div className="container">
					<div className="footer-copy">
						<div className="copy">{copy}</div>
						<div className="footer-column footer-button">
							<button className="right red">
								<Link className="button_inner" to="/products">
									<div className="arrows"></div>
									<div className="message">{button}</div>
								</Link>
							</button>
						</div>
					</div>
				</div>	
			</section>	
		)
	
}

export default connect(mapStateToProps)(Footer)