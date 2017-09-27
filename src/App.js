import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import firebase from './fire'

import Helmet from 'react-helmet'

import Routes from './components/routes'
import {HeaderMenu, MobileMenu, Locations, Footer, Wrapper} from './components/blocks'

// const database = firebase.database()

// var query = database.ref("menu").orderByKey();
// query.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       // key will be "ada" the first time and "alan" the second time
//       var key = childSnapshot.key;
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
//   });
// });
// console.log(query)


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
		<div id="app" style={styles}>
			<Helmet title="Guardsman Limited®" />

			<Wrapper MenuItems={siteMenu}>
				<HeaderMenu MenuItems={siteMenu}/>
				<Routes/>
				<MobileMenu MenuItems={siteMenu}/>
				<Footer MenuItems={siteMenu} SocialItems={socialMenu}/>
			</Wrapper>

			
			<Locations/>
		</div>
	)		
	
}

export default withRouter(connect(mapStateToProps, )(App));

const styles = {
	minHeight: "100vh"
}