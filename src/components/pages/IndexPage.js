import React, {Component} from 'react'
import { connect } from 'react-redux'

import {IndexHero} from '../blocks/'
import {IndexAbout} from '../blocks/'

const mapStateToProps = state => {
	return {
		indexHero: {
			title11: state.indexReducer.title11,
			title12: state.indexReducer.title12,
			title13: state.indexReducer.title13,
			title1link: state.indexReducer.title1link,
		},
		indexAbout: {
			title21: state.indexReducer.title21,
			title22: state.indexReducer.title22,
			title23: state.indexReducer.title23,
			title2link: state.indexReducer.title2link
		}
	}
}

class IndexPage extends Component {
	render(){
		return [
				<IndexHero {...this.props.indexHero} key="IndexHero"/>,
				<IndexAbout {...this.props.indexAbout} key="IndexAbout"/>
			]
	}
}

export default connect(mapStateToProps, )(IndexPage)