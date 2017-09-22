import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import firebase from './fire'

import Helmet from 'react-helmet'

import Routes from './components/routes'
import {HeaderMenu, MobileMenu, Hamburger, Locations, Footer} from './components/'

const database = firebase.database()

console.log(database)

var query = database.ref("menu").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
  });
});
      console.log(query)


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

				<Routes/>

			<Footer MenuItems={siteMenu} SocialItems={socialMenu}/>
			<Hamburger/>
			<Locations/>
		</div>
	)		
	
}

export default withRouter(connect(mapStateToProps, )(App));