import React, {useState} from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, user, blogs, setBlogs }) => {
	
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
		setBlogs(updatedBlogs)
	}
	
	return(
		<div>
			<div style={Object.assign(noDetails,blogStyle )} onClick={handleClick}>
				{blog.title} {blog.author}
			</div>
			<div style={Object.assign(allDetails,blogStyle )} onClick={handleClick}>
				<div>{blog.title} {blog.author}</div>
				<div>{blog.url}</div>
				<div>{blog.likes} likes<button onClick={handleLikeClick}>like</button></div>
				<div>add by {blog.user.name}</div>
			</div>
		</div>

	)
}

export default Blog