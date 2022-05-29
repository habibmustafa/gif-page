const initialState = {
   inputValue: '',
   search: [],
   searchSuggestions: []
}

export default function reducer(state = initialState, action) {
   switch (action.type) {
      case 'VALUE_CHANGE': {
         return {
            ...state,
            inputValue: action.value
         }
      }

      case 'SEARCH': {
         return {
            ...state,
            search: action.data
         }
      }

      case 'SEARCH_SUGGESTIONS': {
         return {
            ...state,
            searchSuggestions: action.data
         }
      }

      default: return state;
   }
}
