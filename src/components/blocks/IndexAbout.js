import React from 'react'
import { Link } from 'react-router-dom'

export const IndexAbout = ({title21,title22,title23,title2link}) => {
	return(
		<section className="content index-about">
			<div className="container">
				<div className="title slide_up_text">
					<div>
						<span>
							{title21}
						</span>
					</div> 
					<div>
						<span>
							{title22}
						</span>
					</div> 
					<div>
						<span>
							{title23}
						</span>
					</div> 
				</div>
				<div className="link_under">
					<Link to="/company">
						{title2link}
					</Link>
				</div>
			</div>
		</section>
	)
}