import React from 'react'
import {connect} from 'react-redux'
import blogService from '../services/blogs'
import Message from './Message'
import {setMessageRedux} from '../reducers/messageReducer'
import {useField, useFieldReset} from '../hooks'

//login form
//removed username, password setUsername, setPassword,
const Login = (props) => {
	console.log("login props",props)
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
			props.setUser(props.user)
      		window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user)) 			
		}
		catch(exception){
			console.log(exception.message); 
			props.setMessage('Username or Password incorrect');
			props.setMessageRedux('**** Incorrect logon - sponsered by redux')
			resetUsername.reset()
			resetPassword.reset()	
		}
	}
	return(
		<div>
			<h2>log in to application</h2>
			<Message message={props.message} setMessage={props.setMessage} />
			<form onSubmit={handleLogin}>
				<div>username <input {...username}/></div>
				<div>password <input {...password}/></div>
				<button type='submit'>login</button>
			</form>
		</div>
	)
}//Login

const mapDispatchToProps = {setMessageRedux}

export default  connect(null,mapDispatchToProps)(Login)