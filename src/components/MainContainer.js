import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {IndexPage, AboutPage, HelpPage, ContactsPage, FeedbackPage, ProductsPage} from './index'

const MainContainer = () => (
		<section className="content">
			<Switch>
			  <Route exact path='/' component={IndexPage}/>
			  <Route path='/about' component={AboutPage}/>
			  <Route path='/products' component={ProductsPage}/>
			  <Route path='/help' component={HelpPage}/>
			  <Route path='/contacts' component={ContactsPage}/>
			  <Route path='/feedback' component={FeedbackPage}/>
			</Switch>
		</section>
	)

export default MainContainer