import React, {useState} from 'react'
import {connect} from 'react-redux'
import blogService from '../services/blogs'
import DeleteButton from './DeleteBlogButton'
import {updateLikes} from '../reducers/blogReducer'

const Blog = ({ blog, ruser, updateLikes }) => {

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
		updateLikes(blog)
	}
	

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
const mapDispatchToProps = ({updateLikes})
export default connect(mapStateToProps, mapDispatchToProps)(Blog)
