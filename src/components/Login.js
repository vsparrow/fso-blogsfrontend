import React from 'react'
import blogService from '../services/blogs'
import Message from './Message'
import {useField, useFieldReset} from '../hooks'

//login form
//removed username, password setUsername, setPassword,
const Login = ({user,  setUser, message, setMessage}) => {
	const username = useField('text')
	const password = useField('password')
	const resetUsername = useFieldReset(username)
	const resetPassword = useFieldReset(password)
	
	const handleLogin = async (e)=>{
		e.preventDefault()
		try{
			const user = await blogService.login({username: username.value, password: password.value})
			resetUsername.reset()
			resetPassword.reset()			
			setUser(user)
      		window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)) 			
		}
		catch(exception){
			console.log(exception.message); 
			setMessage('Username or Password incorrect'); 
			resetUsername.reset()
			resetPassword.reset()	
		}
	}
	return(
		<div>
			<h2>log in to application</h2>
			<Message message={message} setMessage={setMessage} />
			<form onSubmit={handleLogin}>
				<div>username <input {...username}/></div>
				<div>password <input {...password}/></div>
				<button type='submit'>login</button>
			</form>
		</div>
	)
}//Login

export default  Login