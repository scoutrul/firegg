import React from 'react'
import { Link } from 'react-router-dom'

export const IndexHero = () => (
	<section className="hero">
		<div className="container">
			<div className="screener">
				<div className="title slide_up_text">
					<div>
						<span>
							Peace of mind.
						</span>
					</div>
					<div>
						<span>
							Constant security. 
						</span>
					</div>
					<div className="takecontrol">
						<span>
							Take Control. 
						</span>
					</div>
				</div>
				<button className="center red">
					<Link className="button_inner" to="/products">
						<div className="arrows"></div>
						<div className="message">View products</div> 
					</Link>
				</button>
		 	</div>
	 	</div>
	</section>
)
