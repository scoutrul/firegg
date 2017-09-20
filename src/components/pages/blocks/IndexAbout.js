import React from 'react'
import { Link } from 'react-router-dom'

export const IndexAbout = () => (
	<section className="content index-about">
		<div className="container">
			<div className="title slide_up_text">
				<div>
					<span>
						We work hard
					</span>
				</div> 
				<div>
					<span>
						To bring you
					</span>
				</div> 
				<div>
					<span>
						The real quality
					</span>
				</div> 
			</div>
			<div className="link_under">
				<Link to="/about">
					Our story
				</Link>
			</div>
		</div>
	</section>
)
