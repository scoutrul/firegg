import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { OnRouteEvent } from '../js/actions/index'

import $ from 'jquery'
import {IndexPage, AboutPage, HelpPage, ContactsPage, FeedbackPage, ProductsPage} from './pages'


import appearModule from '../js/appearModule'

const mapStateToProps = state => {
	return { HamburgerOn: state.uiReducer.HamburgerOn }
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ OnRouteEvent }, dispatch);
}

class Routes extends Component {
	constructor(props){
		super(props)
		this.props.history.listen((location, action) => {
			this.props.OnRouteEvent(this.props.HamburgerOn)
		 });
		window.onload = function() {
			(document.visibilityState === 'visible') && setTimeout(appearModule.addToAllClasses, 500);
		};
		$(window).on('focus resize scroll click mousemove keydown', appearModule.addToAllClasses);
	}

	render(){

		return(
			<Switch>
				<Route exact path='/' component={IndexPage}/>
				<Route path='/about' component={AboutPage}/>
				<Route path='/products' component={ProductsPage}/>
				<Route path='/help' component={HelpPage}/>
				<Route path='/contacts' component={ContactsPage}/>
				<Route path='/feedback' component={FeedbackPage}/>
				<Route render={()=>(<section className="content">Under Construction</section>)}/>
			</Switch>	
		)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))