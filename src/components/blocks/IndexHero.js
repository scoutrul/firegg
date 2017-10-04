import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ReactSmoothScroll from 'react-smooth-scroll'

export class IndexHero extends Component {

	componentDidMount() {
		window.ParallaxController.update() 
	}

	render(){
		const {title11, title12, title1link} = this.props
		return(
			<ReactSmoothScroll>
				<section className="hero">
					<ParallaxProvider>
						<Parallax
							className="promo"
							offsetYMax={150}
							offsetYMin={-150}
							slowerScrollRate
							tag="h1">
							{title11}
						</Parallax>

						<div className="container">
							<div className="screener">
								<Parallax
									className="title slide_up_text"
									offsetYMax={15}
									offsetYMin={-15}
									tag="div">
									<div className="takecontrol">
										<span>
											{title12}
										</span>
									</div>

									<button className="center red">
										<NavLink className="button_inner" to="/products">
											<div className="arrows"></div>
											<div className="message">{title1link}</div> 
										</NavLink>
									</button>
								</Parallax>
						 	</div>
						</div>
					 </ParallaxProvider>
				</section>
			</ReactSmoothScroll>
		)
		
	}
	
}
