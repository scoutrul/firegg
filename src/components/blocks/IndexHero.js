import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax'
import ReactSmoothScroll from 'react-smooth-scroll'

export class IndexHero extends Component {

	componentDidMount() {
		window.ParallaxController.update() 
	}

	render(){
		const {title11, title12, title1link} = this.props
		return (
			<ReactSmoothScroll>
				<section className="hero">
					<Parallax
						className="promo"
						offsetYMax={140}
						offsetYMin={-150}
						slowerScrollRate
						tag="h1">
						{title11}
					</Parallax>

					<div className="container">
						<div className="screener">
							<Parallax
								offsetYMax={15}
								offsetYMin={-15}
								slowerScrollRate
								tag="div" className="promoHero">
								<div className="img"></div>
							</Parallax>
							<div className="title slide_up_text">
								<div className="takecontrol">
									<span>
										{title12}
									</span>
								</div>
							</div>

							<button className="center red">
								<Link className="button_inner" to="/products">
									<div className="arrows"></div>
									<div className="message">{title1link}</div> 
								</Link>
							</button>
					 	</div>
					</div>
				</section>
			</ReactSmoothScroll>
		)
	}
}
