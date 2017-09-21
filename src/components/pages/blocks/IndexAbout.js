import React from 'react'
import { Link } from 'react-router-dom'

export const IndexAbout = ({...props}) => {
	return(
		<section className="content index-about">
			<div className="container">
				<div className="title slide_up_text">
					<div>
						<span>
							{props.title21}
						</span>
					</div> 
					<div>
						<span>
							{props.title22}
						</span>
					</div> 
					<div>
						<span>
							{props.title23}
						</span>
					</div> 
				</div>
				<div className="link_under">
					<Link to="/about">
						{props.title2link}
					</Link>
				</div>
			</div>
		</section>
	)
}