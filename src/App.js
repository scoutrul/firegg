import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Helmet from 'react-helmet'

import Routes from './components/routes'
import {Header, Footer, Wrapper} from './components/blocks'
import './js/appearModule'



const mapStateToProps = state => {
	return {
		menuItems: state.menuReducer.site,
		socialItems: state.contactsReducer.social
	}
}

const App = (props) => {
	const siteMenu = props.menuItems
	const socialMenu = props.socialItems
	return (	
		<div id="app" style={styles}>
			<Helmet title="Guardsman Limited®" />

			<Wrapper MenuItems={siteMenu}>
				<Header MenuItems={siteMenu}/>
				<Routes/>
				<Footer MenuItems={siteMenu} SocialItems={socialMenu}/>
			</Wrapper>
		</div>
	)		
}

export default withRouter(connect(mapStateToProps, )(App));

const styles = {
	minHeight: "100vh"
}