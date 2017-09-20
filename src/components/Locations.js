import React, { Component } from 'react'
import {  Link, } from 'react-router-dom'

const Locations = (props) => {

	const ChooseLanguage = props.languages.map((languages)=>(
		<li key={languages}>
			<span className="name">
				<Link to={languages}>{languages}</Link>
			</span>
		</li>
		)
	);

	const RegionsEn = props.regionsEn.map((regions)=>(
		<li key={regions}>
			<span>
				<Link to={regions}>{regions}</Link>
			</span>
		</li>
		)
	);

	const RegionsSp = props.regionsSp.map((regions)=>(
		<li key={regions}>
			<span>
				<Link to={regions}>{regions}</Link>
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