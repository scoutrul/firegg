import React from 'react'
import { Link } from 'react-router-dom'

// <TitleBlock title={props.title11} />
// <TitleBlock title={props.title12} />

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
			<h1 style={bgHeader}>Guardsman</h1>
			<div className="container" style={bgImage}>
				<div className="screener">
					<div className="title slide_up_text">
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

const bgHeader = {
	position: "absolute",
	width: "100%",
	textAlign: "center",
	color: "#FFF",
	textTransform: "uppercase",
	fontWeight: "900",
	top: "30%",
	fontSize: "13vw"
}

const bgGradient = {
	background: "-webkit-linear-gradient(left, rgb(18,18,18) 0%,rgb(40,43,50) 15%,rgb(61,68,81) 50%,rgb(40,43,50) 85%, rgb(18,18,18) 100%)",
}
const bgImage = {
	background: "url(./images/guardsman_promo.png) no-repeat",
	backgroundSize: "cover",
	margin: "auto auto 0",
	maxWidth: "1500px",
	backgroundPositionY: "bottom",
	backgroundPositionX: "center",
	minHeight: "100vh"
}

	// background: "url(./firegg/public/images/guardsman_promo.png) no-repeat"
