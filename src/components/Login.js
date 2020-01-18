import React from 'react'
import blogService from '../services/blogs'
import Message from './Message'
import {useField} from '../hooks'

//login form
//removed username, password setUsername, setPassword,
const Login = ({user,  setUser, message, setMessage}) => {
	const username = useField('text')
	const password = useField('text')
	
	const handleLogin = async (e)=>{
		e.preventDefault()
		try{
			const user = await blogService.login({username: username.value, password: password.value})			
			setUser(user)
      		window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)) 			
			// setUsername('')
			// setPassword('')
		}
		catch(exception){
			console.log(exception.message); setMessage('Username or Password incorrect'); console.log('setMessage was set')	
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