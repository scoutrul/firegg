const initialState = {
	ui: {
		HamburgerOn: false,
		LocationsOn: false,
		CurrentLanguage: "English"
	}
}

export const uiReducer = (state = initialState.ui, action) => {

	switch (action.type) {
		case 'TOGGLE_MOBILE_MENU':
			return {HamburgerOn: !action.payload}

		case 'CLOSE_MOBILE_MENU':
			return {HamburgerOn: false}

		case 'OPEN_LOCATIONS_MENU':
			return {LocationsOn: true}

		case 'CLOSE_LOCATIONS_MENU':
			return {LocationsOn: false}

		default:
			return state
	}
}
