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

export const menuReducer = (state = initialState.menu, action) => state;
