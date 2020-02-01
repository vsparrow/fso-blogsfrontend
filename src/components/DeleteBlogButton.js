import React from 'react'
import {connect} from 'react-redux'

const DeleteButton =  ({ruser,blog})=>{
	const handleClick= async (e)=>{ 
		e.stopPropagation() //needed because parent has a onClick function
		if(window.confirm(`remove ${blog.title} by ${blog.user.name}?`)){
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
	if(blog.user.username !== ruser.username){return <div></div>}
	return <button onClick={handleClick}>remove</button>
}

const mapStateToProps = state => ({ruser: state.ruser})
export default connect(mapStateToProps)(DeleteButton)