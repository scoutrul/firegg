import React from 'react'
import { Link } from 'react-router-dom'

export const IndexHero = ({title11, title12, title1link}) => {
	return(
		<section className="hero">
			<h1 className="promo">{title11}</h1>
			<div className="container">
				<div className="screener">
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
	)
}

