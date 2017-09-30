export const HamburgerOnClick = (state) => {
	return {
		type: 'TOGGLE_MOBILE_MENU',
		payload: state
	}
}

export const LocationsOpen = (state) => {
	return {
		type: 'OPEN_LOCATIONS_MENU',
		payload: state
	}
}

export const LocationsClose = (state) => {
	return {
		type: 'CLOSE_LOCATIONS_MENU',
		payload: state
	}
}

export const OnRouteEvent = (state) => {
	return {
		type: 'CLOSE_MOBILE_MENU',
		payload: state
	}
}