import React from 'react'
import blogService from '../services/blogs'

//login form
const Login = ({username, password, user, setUsername, setPassword, setUser}) => {
	const handleLogin = async (e)=>{
		e.preventDefault()
		try{
			const user = await blogService.login({username, password})			
			setUser(user)
      		window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)) 			
			setUsername('')
			setPassword('')
		}
		catch(exception){
			console.log(exception.message)	
		}
	}
	return(
		<div>
			<h2>log in to application</h2>
			<form onSubmit={handleLogin}>
				<div>username <input type='text' name='username' value={username} onChange={e=>setUsername(e.target.value)}/></div>
				<div>password <input type='text' name='password' value={password} onChange={e=>setPassword(e.target.value)}/></div>
				<button type='submit'>login</button>
			</form>
		</div>
	)
}//Login

export default  Login