const initialState = {
	feedback: {
		title1: "Fill your info &",
		titl12: "get free quote now",
		button1: "Get quotes",
		button2: "View Products",
		successTitle: "Quote has been sent!",
		successText:"Check your inbox for mote information.",

	}
}

export const feedbackReducer = (state = initialState.feedback, action) => state;
