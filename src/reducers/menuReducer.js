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
		
	}
}

export const menuReducer = (state = initialState.menu, action) => state;
