import React from 'react'
import { Link } from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import ReactSmoothScroll from 'react-smooth-scroll'


export const IndexHero = ({title11, title12, title1link}) => {
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
								offsetYMax={20}
								offsetYMin={-20}
								slowerScrollRate
								tag="div">
								<div className="takecontrol">
									<span>
										{title12}
									</span>

								</div>

							<button className="center red">
								<Link className="button_inner" to="/products">
									<div className="arrows"></div>
									<div className="message">{title1link}</div> 
								</Link>
							</button>
							</Parallax>
					 	</div>
					</div>
				 </ParallaxProvider>
			</section>
		</ReactSmoothScroll>
	)
}

