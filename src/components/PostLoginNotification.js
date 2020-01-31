import React from 'react'
import {connect} from 'react-redux'
import {clearUserRedux} from '../reducers/userReducer'


const PostLoginMessage = (props)=>{
	const LogoutButton = ()=>{
		return (
			<button onClick={
					()=>{window.localStorage.removeItem('loggedBlogappUser'); 
						 props.setUser(null);
						 props.clearUserRedux()
						}
					}>
				logout
			</button>)
}

	
	console.log(props)
	return(<div>
			<p>{props.ruser ? props.ruser.name : ''} logged in<LogoutButton setUser={props.setUser}/></p>			
		</div>)
}

const mapStateToProps = state => ({ruser: state.ruser})
const mapDispatchToProps = ({clearUserRedux})
export default connect(mapStateToProps, mapDispatchToProps)(PostLoginMessage)