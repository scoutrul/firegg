const initialState = {
	products: {
		home: [
			{
				title: "Remote Arm & Disarm",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Access Control",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Vehicle Tracking",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Burglary Momitoring",
				imgUrl: "http://www.some.url"
			}
		],
		office: [
			{
				title: "RFID",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Fire & Smoke Monitoring",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Cash management",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Close Protection",
				imgUrl: "http://www.some.url"
			}
		]
	}
}

export const productsReducer = (state = initialState.products, action) => state;
