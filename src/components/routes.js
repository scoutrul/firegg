import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { OnRouteEvent } from '../actions/index'

import {IndexPage, AboutPage, HelpPage, ContactsPage, FeedbackPage, ProductsPage, BlogPage} from './pages'


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
			window.scrollTo(0, 0);
		});
	}

	redirectPls() {
		window.location.href = '/home'
	}

	render(){
		return(
			<Switch>
				<Route exact path='/home' component={IndexPage}/>
				<Route path='/company' component={AboutPage}/>
				<Route path='/products' component={ProductsPage}/>
				<Route path='/help' component={HelpPage}/>
				<Route path='/contact' component={ContactsPage}/>
				<Route path='/feedback' component={FeedbackPage}/>
				<Route path='/blog' component={BlogPage}/>
				<Route render={() => { 
					this.redirectPls();
					return (<section className="content" style={{justifyContent: "center"}}>Under Construction</section>)}
				}/>
			</Switch>	
		)
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))