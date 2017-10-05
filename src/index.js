import registerServiceWorker from './registerServiceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ParallaxProvider } from 'react-scroll-parallax'

import App from './App'
import MainReducer from './components/reducers'

const store = createStore(MainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const StartApp = (
	<ParallaxProvider>
		<BrowserRouter>
			<Provider store={store}>
				<App/>
			</Provider>
		</BrowserRouter>
	</ParallaxProvider>
)

ReactDOM.render(StartApp, document.getElementById('root'))
registerServiceWorker()
