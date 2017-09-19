import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = () => (
		<div id="app">
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
							<div>.takecontrol
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
			<section className="content index-about">
				<div className="container">
					<div className="title slide_up_text">
						<div>
							<span>
								We work hard
							</span>
						</div> 
						<div>
							<span>
								To bring you
							</span>
						</div> 
						<div>
							<span>
								The real quality
							</span>
						</div> 
					</div>
					<div className="link_under">
						<Link to="/about">
							Our story
						</Link>
					</div>
				</div>
			</section>
		</div>
)

export default IndexPage