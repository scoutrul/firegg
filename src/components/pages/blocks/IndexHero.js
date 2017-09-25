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
		<section className="hero">
			<h1 className="promo">Guardsman</h1>
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


const bgImageUrl = (process.env.NODE_ENV === 'production') ? "./firegg/public/images/guardsman_promo.png":"./images/guardsman_promo.png";
const bgImage = {
	backgroundImage: `url(${bgImageUrl}) no-repeat`,
}
