export const HamburgerOnClick = (state) => {
	return {
		type: 'TOGGLE_MOBILE_MENU',
		payload: state
	}
}

export const OnRouteEvent = (state) => {
	return {
		type: 'CLOSE_MOBILE_MENU',
		payload: state
	}
}