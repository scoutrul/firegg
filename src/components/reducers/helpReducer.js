const initialState = {
	help: [
		{
			question: "How to make an order?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
		},
		{
			question: "How to robber the bank?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
		},
		{
			question: "How to spy my wife?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
		},
		{
			question: "How to dont care?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque, rerum inventore enim aliquid molestias?"
		}
	]
}

export const helpReducer = (state = initialState.help, action) => state;
