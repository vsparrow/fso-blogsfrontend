import React from 'react'
import {connect} from 'react-redux'
import {deleteBlog} from '../reducers/blogReducer'

const DeleteButton =  (props)=>{
	const handleClick= async (e)=>{ 
		e.stopPropagation() //needed because parent has a onClick function
		if(window.confirm(`remove ${props.blog.title} by ${props.blog.user.name}?`)){
			props.deleteBlog(props.blog, props.ruser.token)
			// setShowDetails needed because the next blog that occupies this space will start in an expanded mode 
			props.setShowDetails(!props.showDetails) 
		}//end confirm	
	}
	//show different things based on username
	if(props.blog.user.username !== props.ruser.username){return <div></div>}
	return <button onClick={handleClick}>remove</button>
}

const mapStateToProps = state => ({ruser: state.ruser})
const mapDispatchToProps = ({deleteBlog})
export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)