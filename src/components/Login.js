import React from 'react'
import {connect} from 'react-redux'
import blogService from '../services/blogs'
import Message from './Message'
import {setMessageRedux} from '../reducers/messageReducer'
import {setUserRedux} from '../reducers/userReducer'
import {useField, useFieldReset} from '../hooks'

//login form
const Login = (props) => {
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
			// props.setUser(user)
			props.setUserRedux(user)
      		window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)) 			
		}
		catch(exception){
			console.log(exception.message); 
			props.setMessageRedux('Incorrect username or password - message via redux')
			setTimeout(()=>{props.setMessageRedux('')},5000)
			resetUsername.reset()
			resetPassword.reset()	
		}
	}
	return(
		<div>
			<h2>log in to application</h2>
			<Message />
			<form onSubmit={handleLogin}>
				<div>username <input {...username}/></div>
				<div>password <input {...password}/></div>
				<button type='submit'>login</button>
			</form>
		</div>
	)
}//Login
// setUserRedux
const mapDispatchToProps = {setMessageRedux, setUserRedux}

export default  connect(null,mapDispatchToProps)(Login)