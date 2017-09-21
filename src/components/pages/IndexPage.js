import React from 'react'
import { connect } from 'react-redux'

import {IndexHero} from './blocks/IndexHero'
import {IndexAbout} from './blocks/IndexAbout'

const mapStateToProps = state => {
	return {
		title11: state.indexReducer.title11,
		title12: state.indexReducer.title12,
		title13: state.indexReducer.title13,
		title1link: state.indexReducer.title1link,
		title21: state.indexReducer.title21,
		title22: state.indexReducer.title22,
		title23: state.indexReducer.title23,
		title2link: state.indexReducer.title2link
	}
}

const IndexPage = (props) => {
	return (
		<div>
			<IndexHero {...props}/>
			<IndexAbout {...props}/>
		</div>
	)
}

export default connect(mapStateToProps, )(IndexPage)