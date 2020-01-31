import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import blogService from './services/blogs'
import Login from './components/Login'
import BlogsComponent from './components/BlogsComponent'
import {initializeBlogs} from './reducers/blogReducer'
import {setUserRedux} from './reducers/userReducer'

const App = (props) => {
	//************************************************************* variables
	const [user, setUser] = useState(null)
	const [blogs, setBlogs] = useState([])
	const [message, setMessage] = useState('')
	//************************************************************* EFFECT
	// useEffect(() => {
	// blogService.getAll().then(data => {
	// 		setBlogs(data)
	// 	})
	// }, [])
	
	useEffect(()=>{ props.initializeBlogs()	},[])
	
	useEffect(()=>{
		const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
		if(loggedUserJSON){
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			props.setUserRedux(user)
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

				setBlogs={setBlogs} 
				user={user} 
				setUser={setUser}
				message={message}
				setMessage={setMessage}
			/> )
}

const mapStateToProps = state => ({blogs: state.blogs})
const mapDispatchToProps = ({setUserRedux, initializeBlogs})
export default connect(mapStateToProps,mapDispatchToProps)(App);
