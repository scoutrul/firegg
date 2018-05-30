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
				title: "Vehicle Monitoring",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Burglary Monitoring",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Access Control",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Manned Security",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Fire & Smore Monitoring",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Garage door",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Burglary Monitoring",
				imgUrl: "http://www.some.url"
			}
		],
		office: [
			{
				title: "Remote arm & disarm",
				imgUrl: "http://www.some.url"
			},
			{
				title: "RFID",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Fire & Smoke Monitoring",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Video Surveillance",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Access Control",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Burglary Monitoring",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Vehicle/Fleet management",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Radio",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Cash management",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Manned Security",
				imgUrl: "http://www.some.url"
			},
			{
				title: "Intelligence services",
				imgUrl: "http://www.some.url"
			}
		]
	}
}

export const productsReducer = (state = initialState.products, action) => state;
