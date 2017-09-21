import React from 'react'
import { Link } from 'react-router-dom'

export const IndexHero = ({...props}) => {
	return(
		<section className="hero">
			<div className="container">
				<div className="screener">
					<div className="title slide_up_text">
						<div>
							<span>
								{props.title11}
							</span>
						</div>
						<div>
							<span>
								{props.title12}
							</span>
						</div>
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