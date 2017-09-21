import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import {HeaderMenu, MobileMenu, Hamburger, Locations, Footer, MainContainer} from './components/'


const mapStateToProps = state => {
	return {
			menuItems: state.menuReducer.site,
			socialItems: state.menuReducer.social
	}
}

const App = (props) => {
	const siteMenu = props.menuItems
	const socialMenu = props.socialItems

	return (
		<div id="app">
			<Helmet title="Guardsman Limited®" />
			<HeaderMenu MenuItems={siteMenu}/>
			<MobileMenu MenuItems={siteMenu}/>
			<MainContainer/>
			<Footer MenuItems={siteMenu} SocialItems={socialMenu}/>
			<Hamburger/>
			<Locations/>
		</div>
	)
}

export default connect(mapStateToProps, )(App);