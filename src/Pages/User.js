import React from 'react'
import NotFoundPage from './NotFoundPage';

function User() {
   let username
   localStorage.username ? username = JSON.parse(localStorage.username) : username = null
   let path = window.location.pathname
   console.log(path === `/user/${username}` && true);


   if(path !== `/user/${username}`) {
      return <NotFoundPage error='400' />
   }

   return (
      (<div>{username}</div>)
   )
}

export default User