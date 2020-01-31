import React from 'react'
import {connect} from 'react-redux'

const LogoutButton = ({setUser})=>{
	return <button onClick={()=>{window.localStorage.removeItem('loggedBlogappUser'); setUser(null);}}>logout</button>
}

const PostLoginMessage = (props)=>{
	console.log(props)
	return(<div>
			<p>{props.user.name} logged in<LogoutButton setUser={props.setUser}/></p>
			<p>ruser.name is {props.ruser ? props.ruser.name : ''}</p>
		</div>)
}

const mapStateToProps = state => ({ruser: state.ruser})
export default connect(mapStateToProps)(PostLoginMessage)