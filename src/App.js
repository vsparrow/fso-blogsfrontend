import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import blogService from './services/blogs'
import Login from './components/Login'
import BlogsComponent from './components/BlogsComponent'
import {initializeBlogs} from './reducers/blogReducer'


const App = (props) => {
	//************************************************************* variables
	const [user, setUser] = useState(null)
	const [blogs, setBlogs] = useState([])
	const [message, setMessage] = useState('')
	//************************************************************* EFFECT
	useEffect(() => {
    	blogService.getAll().then(data => {
			setBlogs(data)
		})
  	}, [])
	
	useEffect(()=>{  
		props.initializeBlogs()
	},[])
	console.log('blogs from mapStateToProps is', blogs)
	
	useEffect(()=>{
		const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
		if(loggedUserJSON){
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			blogService.getAll()
		}
	},[])
	
	//************************************************************* RENDERING
	if(user === null){ 
		return <Login 
				   user={user} 
				   setUser={setUser}
				   message={message}
				   setMessage={setMessage}
				/>
	}
	//else
	return (<BlogsComponent 
				blogs={blogs} 
				setBlogs={setBlogs} 
				user={user} 
				setUser={setUser}
				message={message}
				setMessage={setMessage}
			/> )
}

const mapStateToProps = state => ({blogs: state.blogs})
export default connect(mapStateToProps,{initializeBlogs})(App);
