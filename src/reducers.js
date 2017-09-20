import { combineReducers } from 'redux'

const initialState = {
	menu: {
		site: [
			{
				name: "About", 
				url: "/about"
			},
			{
				name: "Products", 
				url: "/products"
			},
			{
				name: "Help", 
				url: "/help"
			},
			{
				name: "Contacts", 
				url: "/contacts"
			}
		],
		social: [
			{
				name: "YouTube",
				link: "https://www.youtube.com/user/GuardsmanGroup/"
			},
			{
				name: "Facebook",
				link: "https://www.facebook.com/GuardsmanGroup"
			},
			{
				name: "Twitter",
				link: "https://twitter.com/guardsmangroup"
			},
			{
				name: "Google Plus",
				link: "http://gplus.to/guardsmangroup"
			}
		]
	}
}

const MenuReducer = (state = initialState, action) => state;

const MainReducer = combineReducers({
	MenuReducer
})

export default MainReducer