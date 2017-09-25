import React from 'react'
import { Link } from 'react-router-dom'

const TitleBlock = (props) => (
	<div>
		<span>
			{props.title}
		</span>
	</div>
	)
export const IndexHero = (props) => {
	return(
		<section className="hero" style={bgGradient}>
			<div className="container" style={bgImage}>
				<div className="screener">
					<div className="title slide_up_text">
						<TitleBlock title={props.title11} />
						<TitleBlock title={props.title12} />
						<div className="takecontrol">
							<span>
								{props.title13}
							</span>
						</div>
					</div>
					<button className="center red">
						<Link className="button_inner" to="/products">
							<div className="arrows"></div>
							<div className="message">{props.title1link}</div> 
						</Link>
					</button>
			 	</div>
		 	</div>
		</section>
	)
}
const bgGradient = {
	background: "-webkit-linear-gradient(left, rgb(18,18,18) 0%,rgb(40,43,50) 15%,rgb(61,68,81) 50%,rgb(40,43,50) 85%, rgb(18,18,18) 100%)",
}
const bgImage = {
	background: "url(./firegg/public/images/guardsman_promo.png) no-repeat",
	backgroundSize: "cover",
	margin: "auto auto 0",
	maxWidth: "1500px"
}
