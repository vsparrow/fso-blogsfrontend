import React from 'react'

const LogoutButton = ({setUser})=>{
	return <button onClick={()=>{window.localStorage.removeItem('loggedBlogappUser'); setUser(null);}}>logout</button>
}

const PostLoginMessage = ({user,setUser})=>{
	return(<div><p>{user.name} logged in<LogoutButton setUser={setUser}/></p></div>)
}

export default PostLoginMessage