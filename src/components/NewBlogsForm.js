import React,{useState} from 'react'
import {connect} from 'react-redux'
import blogService from '../services/blogs'
import {setMessageRedux} from '../reducers/messageReducer'
import {addBlog} from '../reducers/blogReducer'

// const NewBlogsForm = ({user,blogs,setBlogs,message, setMessage}) => {
const NewBlogsForm = (props) => {
	const [title,setTitle] = useState('')
	const [author,setAuthor] = useState('')
	const [url,setUrl] = useState('')	
	
	const createHandler = async (e) => { 
		e.preventDefault()
		const newBlogData = {title,url,author}
		//post the blog
		try{
			//move this work to the reducer
			const results = await blogService.postBlog(newBlogData, props.ruser.token) //******
			// props.setBlogs(props.blogs.concat(results))
			props.addBlog(results)
			props.setMessageRedux(`a new blog ${results.title} by ${results.author} added`)
			setTimeout(()=>{props.setMessageRedux('')},5000)
		}catch(error){props.setMessageRedux('error adding blog')}	
		setTitle('')
		setAuthor('')
		setUrl('')
	}
	
	return(
		<div>
			<h2>create new</h2>
			<form>
				<div>title:<input type='text' name='title' value={title} onChange={e=>setTitle(e.target.value)}/></div>
				<div>author:<input type='text' name='author' value={author} onChange={e=>setAuthor(e.target.value)}/></div>
				<div>url:<input type='text' name='url' value={url} onChange={e=>setUrl(e.target.value)}/></div>
				<button onClick={createHandler}>create</button>
			</form>
		</div>
	)		
}  
const mapStateToProps = state => ({ruser: state.ruser})
const mapDispatchToProps = {setMessageRedux, addBlog}
export default connect(mapStateToProps, mapDispatchToProps)(NewBlogsForm)