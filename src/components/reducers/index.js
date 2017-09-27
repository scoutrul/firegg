import { combineReducers } from 'redux'

import { menuReducer } from './menuReducer'
import { locationsReducer } from './locationsReducer'
import { indexReducer } from './indexReducer'
import { helpReducer } from './helpReducer'
import { contactsReducer } from './contactsReducer'
import { productsReducer } from './productsReducer'
import { uiReducer } from './uiReducer'


const MainReducer = combineReducers({
	menuReducer,
	locationsReducer,
	indexReducer,
	helpReducer,
	contactsReducer,
	productsReducer,
	uiReducer
})

export default MainReducer