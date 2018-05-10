const initialState = {
	menu: {
		site: [
			{
				name: "Company", 
				url: "/company"
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
				name: "Contact", 
				url: "/contact"
			},
			{
				name: "Blog", 
				url: "/blog"
			}
		],
		
	}
}

export const menuReducer = (state = initialState.menu, action) => state;
