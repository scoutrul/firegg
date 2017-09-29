import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import firebase from './fire'

import Helmet from 'react-helmet'

import Routes from './components/routes'
import {Header, Footer, Wrapper} from './components/blocks'
import appearModule from './js/appearModule'

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