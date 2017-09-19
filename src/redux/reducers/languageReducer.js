import {CHANGE_LANGUAGE} from '.types'

const initialState = { language: 'en' };

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { language: state.value + 1 };
    default:
      return state;      
  }
}