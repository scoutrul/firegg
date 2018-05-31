import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { LocationsClose } from '../../actions/';

const mapStateToProps = (state) => {
	return {
		languages: state.locationsReducer.languages,
		regionsEn: state.locationsReducer.regions.en,
		regionsSp: state.locationsReducer.regions.sp,
		LocationsOn: state.uiReducer.LocationsOn,
		CurrentLanguage: state.uiReducer.CurrentLanguage
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ LocationsClose }, dispatch);
};

class Locations extends Component {
	constructor() {
		super();
		this.state = {
			step1: true,
			curlang: this.props.CurrentLanguage
		};
	}

	handlerButton = () =>
		this.state.step1 ? this.props.LocationsClose(this.props.LocationsOn) : this.setState({ step1: true });

	handlerClose = () => {
		this.props.LocationsClose(this.props.LocationsOn);
		this.setState({ step1: true });
	};
	handlerLanguage = (language) => {
		this.setState({ step1: false });
		this.setState({ curlang: language });
	};
	render() {
		const { languages, regionsEn, regionsSp, LocationsOn } = this.props;

		const ChooseLanguage = languages.map((language) => (
			<li key={language}>
				<span className="name" onClick={this.handlerLanguage.bind(this, language)}>
					{language}
				</span>
			</li>
		));

		const RegionsEn = regionsEn.map((regions) => (
			<li key={regions}>
				<span>{regions}</span>
			</li>
		));

		const RegionsSp = regionsSp.map((regions) => (
			<li key={regions}>
				<span>{regions}</span>
			</li>
		));

		const Step1 = () => <ul className="language slide_up_text">{ChooseLanguage}</ul>;

		const Step2 = () =>
			this.state.curlang === 'English' ? (
				<ul className="regions slide_up_text">{RegionsEn}</ul>
			) : (
				<ul className="regions slide_up_text">{RegionsSp}</ul>
			);

		const BackButton = () => (
			<button className="left grey" onClick={this.handlerButton}>
				<div className="button_inner">
					<div className="arrows" />
					<div className="message">Back</div>
				</div>
			</button>
		);

		const ChoosePanel = () => (
			<div id="choose" className="choose--active">
				<div className="hamburger is-active close" onClick={this.handlerClose}>
					<span className="hamburger-box">
						<span className="hamburger-inner" />
					</span>
				</div>
				<div className="title">{this.state.step1 ? 'Choose language' : 'Choose region'}</div>
				{this.state.step1 ? <Step1 /> : <Step2 />}
				<BackButton />
			</div>
		);

		return LocationsOn ? <ChoosePanel /> : null;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
