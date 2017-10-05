import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ParallaxController } from 'react-scroll-parallax'

import Helmet from 'react-helmet'

import Routes from './components/routes'
import {Header, Footer, Wrapper} from './components/blocks'
import appearModule from './js/appearModule'



//Console log title
console.log("%cGuardsman Limited", "font: 2.2rem 'Work Sans', 'sans-serif'; color: #FFF; background-color: #1b1b1b; text-decoration: underline #ff002e");


//magic appear//////////
window.onload = function() {
	(document.visibilityState === 'visible') && setTimeout(appearModule.addToAllClasses, 500);
};

("focus resize scroll click mousemove keydown".split(" ")).forEach(function(e){
   window.addEventListener(e,appearModule.addToAllClasses,false);
});
////////////////////////

const mapStateToProps = state => {
	return {
		menuItems: state.menuReducer.site,
		socialItems: state.contactsReducer.social
	}
}

ParallaxController.init() 
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