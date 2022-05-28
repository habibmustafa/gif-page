export const setSearch = name => {
   return (dispatch) => {
      const getData = async () => {
         const response = fetch(`https://g.tenor.com/v1/search?q=${name}&key=LIVDSRZULELA&limit=50`)
         const data = (await response).json()
         return data
      }
      getData().then(data => dispatch({type: 'SEARCH', data: data.results}))
   }
}