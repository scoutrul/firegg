import React, { Component } from 'react'


const Locations = (props) => {
	const ChooseLanguage = props.languages.map((languages)=>(
		<li key={languages}>
			<span className="name">
				<a href="#">{languages}</a>
			</span>
		</li>
		)
	);

	const RegionsEn = props.regionsEn.map((regions)=>(
		<li key={regions}>
			<span>
				<a href="#">{regions}</a>
			</span>
		</li>
		)
	);

	const RegionsSp = props.regionsSp.map((regions)=>(
		<li key={regions}>
			<span>
				<a href="#">{regions}</a>
			</span>
		</li>
		)
	);
	return (
		<div id="choose">
			<div className="title">Choose region</div>

			<ul className="language slide_up_text">
				{ChooseLanguage}
			</ul>

			<div className="regions">
				<ul className="slide_up_text">
					{RegionsEn}
				</ul>
				<ul className="slide_up_text">
					{RegionsSp}
				</ul>
			</div>

			<button className="left grey location_toggle">
				<div className="button_inner">
					<div className="arrows"></div>
					<div className="message">Back</div>
				</div>
			</button>

		</div>
	)
}
export default Locations