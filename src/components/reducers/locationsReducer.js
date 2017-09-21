const initialState = {
	locations: {
		languages: ["English", "Spanish"],
		regions: {
			en:["Jamaica", "Barbados", "Grenadine"],
			sp:["St.Lucia", "St.Vincent"]
		}
	}
}

export const locationsReducer = (state = initialState.locations, action) => state;
