import React, {useState} from 'react'
const Blog = ({ blog }) => {
	
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
	
	const handleLikeClick = (e)=>{
		e.stopPropagation()
		console.log("I dont do anything yet")
	}
	console.log("blog", blog)
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