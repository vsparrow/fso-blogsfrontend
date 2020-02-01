import React from 'react'
import {connect} from 'react-redux'
import {deleteBlog} from '../reducers/blogReducer'

const DeleteButton =  (props)=>{
	const handleClick= async (e)=>{ 
		e.stopPropagation() //needed because parent has a onClick function
		if(window.confirm(`remove ${props.blog.title} by ${props.blog.user.name}?`)){
			props.deleteBlog(props.blog, props.ruser.token)
			//need to delete blog in backend and update the state ************************************
			// const result = await blogService.deleteBlog(blog.id,ruser.token)
			// if(result === 204){
			// 	//remove this blog
			// 	// setShowDetails(!showDetails) // this doesnt matter once blog deleted
			// 	const updatedBlogs = blogs.filter(b=> b.id !== blog.id)
			// 	setBlogs(updatedBlogs)
			// }
			///////////////////////**********************************************work on above
			//add error message if not 204
		}//end confirm	
	}
	//show different things based on username
	if(props.blog.user.username !== props.ruser.username){return <div></div>}
	return <button onClick={handleClick}>remove</button>
}

const mapStateToProps = state => ({ruser: state.ruser})
const mapDispatchToProps = ({deleteBlog})
export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)