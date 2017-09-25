import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {IndexPage, AboutPage, HelpPage, ContactsPage, FeedbackPage, ProductsPage} from './pages'

const Routes = () => (
	<Switch>
		<Route exact path='/' component={IndexPage}/>
		<Route path='/about' component={AboutPage}/>
		<Route path='/products' component={ProductsPage}/>
		<Route path='/help' component={HelpPage}/>
		<Route path='/contacts' component={ContactsPage}/>
		<Route path='/feedback' component={FeedbackPage}/>
		<Route render={()=>(<section className="content">Page not found</section>)}/>
	</Switch>
)

export default Routes