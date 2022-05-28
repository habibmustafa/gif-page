const initialState = {
   search: []
}




export default function reducer(state = initialState, action) {
   switch (action.type) {
      case 'SEARCH': {
         return {
            ...state,
            search: action.data
         }
      }
      default: return state;
   }
}
