import React from 'react'
import {connect} from 'react-redux'
import {clearUserRedux} from '../reducers/userReducer'

const LogoutButton = (props)=>{
	const handleClick=()=>{
		window.localStorage.removeItem('loggedBlogappUser'); 
		props.setUser(null);
		props.clearUserRedux()		
	}
	return (<button onClick={handleClick}>logout</button>)
}

const mapDispatchToProps = ({clearUserRedux})

export default connect(null,mapDispatchToProps)(LogoutButton)