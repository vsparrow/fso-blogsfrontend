import React from 'react'
import {connect} from 'react-redux'
import LogoutButton from './LogoutButton'

const PostLoginMessage = (props)=>{		
	return(<div>
			<p>{props.ruser ? props.ruser.name : ''} logged in<LogoutButton setUser={props.setUser}/></p>			
		</div>)
}

const mapStateToProps = state => ({ruser: state.ruser})

export default connect(mapStateToProps)(PostLoginMessage)