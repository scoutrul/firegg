const initialState = {
	ui: {
		HamburgerOn: false
	}
}

export const uiReducer = (state = initialState.ui, action) => {

	switch (action.type) {
		case 'TOGGLE_MOBILE_MENU':
			return {HamburgerOn: !action.payload}
		case 'CLOSE_MOBILE_MENU':
			return {HamburgerOn: false}
		default:
			return state
	}
}
