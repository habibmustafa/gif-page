const initialState = {
   inputValue: '',
   search: [],
   searchSuggestions: [],
   gifItem: []
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

      case 'GIF_ITEM_CLICK': {
         return {
            ...state,
            gifItem: action.data
         }
      }

      default: return state;
   }
}
