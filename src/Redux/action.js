export const setInputChange = value => {
   return {
      type: "VALUE_CHANGE", value
   }
}

export const setSearch = name => {
   return (dispatch) => {
      const getData = async () => {
         const response = fetch(`https://g.tenor.com/v1/search?q=${name}&key=O2F76B8G7S1C&limit=50`)
         const data = (await response).json()
         return data
      }
      getData().then(data => dispatch({type: 'SEARCH', data: data.results}))
   }
}

export const setSuggestions = name => {
   return (dispatch) => {
      const getData = async () => {
         const response = fetch(`https://g.tenor.com/v1/search_suggestions?q=${name}&key=O2F76B8G7S1C`)
         const data = (await response).json()
         return data
      }
      getData().then(data => dispatch({type: 'SEARCH_SUGGESTIONS', data: data.results}))
   }
}

export const setGifItem = ({...item}) => {
   return {
      type: 'GIF_ITEM_CLICK', 
      payload: {
         ...item
      }
   }
}