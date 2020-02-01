import React, {useState} from 'react'
import {connect} from 'react-redux'
import blogService from '../services/blogs'
import DeleteButton from './DeleteBlogButton'

const Blog = ({ blog, user, blogs, setBlogs, ruser }) => {

	const [showDetails, setShowDetails] = useState(false)
	const noDetails = {display: showDetails ? 'none' : ''}
	const allDetails = {display: showDetails ? '' : 'none'}
	
	const blogStyle = {
		paddingTop: 10,
		paddingLeft: 2,	
		border: 'solid',
		borderWidth: 1,
		marginBottom: 5,
	}		
	const handleClick = (e)=>{
		setShowDetails(!showDetails)
	}
	
	const handleLikeClick = async (e)=>{
		e.stopPropagation() 
		//gather all data needed
		const updatedBlog = JSON.parse(JSON.stringify(blog))		
		updatedBlog.likes = updatedBlog.likes + 1		
		const returnedBlog = await blogService.updateBlog(updatedBlog, user.token)
		console.log('returnedBlog is', returnedBlog)
		//now we need to update the the likes in the local copy		
		const updatedBlogs = blogs.map(b=>{
			if(b.id !==blog.id){return b}
			return returnedBlog
		})
		setShowDetails(!showDetails)
		setBlogs(updatedBlogs)
	}
	
	// const DeleteButton =  ({user,blog})=>{
	// 	const handleClick= async (e)=>{ 
	// 		e.stopPropagation() 
	// 		if(window.confirm(`remove ${blog.title} by ${blog.user.name}?`)){
	// 			const result = await blogService.deleteBlog(blog.id,user.token)
	// 			if(result === 204){
	// 				//remove this blog
	// 				setShowDetails(!showDetails)
	// 				const updatedBlogs = blogs.filter(b=> b.id !== blog.id)
	// 				setBlogs(updatedBlogs)
	// 			}
	// 			//add error message if not 204
	// 		}//end confirm	
	// 	}
	// 	//show different things based on username
	// 	if(blog.user.username !== user.username){return <div></div>}
	// 	return <button onClick={handleClick}>remove</button>
	// }
	
	return(
		<div className='blog'>
			<div style={Object.assign(noDetails,blogStyle )} onClick={handleClick} id='blogMinimal'>
				{blog.title} {blog.author}
			</div>
			<div style={Object.assign(allDetails,blogStyle )} onClick={handleClick} id='blogExtended'>
				<div>{blog.title} {blog.author}</div>
				<div>{blog.url}</div>
				<div>{blog.likes} likes<button onClick={handleLikeClick}>like</button></div>
				<div>add by {blog.user.name}</div>
				<DeleteButton blog={blog} showDetails={showDetails} setShowDetails={setShowDetails} />
			</div>
		</div>

	)
}

const mapStateToProps = state => ({ruser: state.ruser})
export default connect(mapStateToProps)(Blog)
