import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
		let {MenuItems, SocialItems } = props;
		const menuItems = MenuItems.map((menu,i)=>(
									<li key={i}>
										<span>
											<Link to={menu.url}>{menu.name}</Link>
										</span>
									</li>
									)
								);
		const socialItems = SocialItems.map((social,i)=>(
									<li key={i}>
										<span>
											<Link to={social.link} target="_blank">{social.name}</Link>
										</span>
									</li>
									)
								);
		return (
			<section className="footer">
				<div className="container">
					<div className="footer-title">
						<h6 className="footer-slogan slide_up_text">
							<div style={{float: "left"}}>
								<span>Take&nbsp;</span>
							</div>
							<div>
								<span>Control.</span>
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
						<div className="copy 2017"> © Guardsman Limited.</div>
						<div className="footer-column.footer-button">
							<button className="right red">
								<a className="button_inner" href="products.html">
									<div className="arrows"></div>
									<div className="message">Products</div>
								</a>
							</button>
						</div>
					</div>
				</div>	
			</section>	
		)
	
}

export default Footer;	