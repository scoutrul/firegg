import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { LocationsOpen } from '../../actions/index'

const mapStateToProps = state => {
	return { LocationsOn: state.uiReducer.LocationsOn }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ LocationsOpen }, dispatch);
}

const LocationsOpener = (props) =>
	<div className="location" onClick={() => props.LocationsOpen(props.LocationsOn)}>
		<img src="images/icon_marker.svg" alt="Location"/>
		<span>Jamaica</span>
	</div>

export default connect(mapStateToProps, mapDispatchToProps)(LocationsOpener)