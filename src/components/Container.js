import React, { Component } from 'react'

class Container extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="app">
				<section className="hero">
					<div className="container">
						<div className="screener">
							<div className="title.slide_up_text">
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
								<a className="button_inner" href="products.html">
									<div className="arrows"></div>
									<div className="message">View products</div> 
								</a>
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
							<a href="about.html">
								Our story
							</a>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Container;