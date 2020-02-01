import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import blogService from './services/blogs'
import Login from './components/Login'
import BlogsComponent from './components/BlogsComponent'
import {initializeBlogs} from './reducers/blogReducer'
import {setUserRedux} from './reducers/userReducer'

const App = (props) => {
	//************************************************************* EFFECT

	useEffect(()=>{ props.initializeBlogs()	},[])
	
	useEffect(()=>{
		const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
		if(loggedUserJSON){
			const user = JSON.parse(loggedUserJSON)
			props.setUserRedux(user)
			blogService.getAll()
		}
	},[])
	
	//************************************************************* RENDERING
	if(props.ruser === null){ return <Login />}
	return (<BlogsComponent /> )
}

const mapStateToProps = state => ({blogs: state.blogs, ruser: state.ruser})
const mapDispatchToProps = ({setUserRedux, initializeBlogs})
export default connect(mapStateToProps,mapDispatchToProps)(App);
