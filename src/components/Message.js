import React from 'react'
import {connect} from 'react-redux'
import {setMessageRedux} from '../reducers/messageReducer'

const Message = (props) => {
	console.log(props)
	if(props.message.length === 0){ return <div>{props.rmessage}</div>}
	setTimeout(()=>{props.setMessage('')},5000)
	setTimeout(()=>{props.setMessageRedux('')},5000)
	if(props.message.substr(0,10)==='a new blog'){
		return <div className='message'><h2>{props.message} {props.rmessage}</h2></div>		
	}
	return <div className='error'><h2>{props.message} {props.rmessage}</h2></div>
}

const mapStateToProps = state => {
	return {
		rmessage: state.rmessage
	}
}

const mapDispatchToProps = {setMessageRedux}
export default connect(mapStateToProps, mapDispatchToProps)(Message)