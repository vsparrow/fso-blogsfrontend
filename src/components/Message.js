import React from 'react'

const Message = ({message, setMessage}) => {
	if(message.length === 0){ return <div></div>}
	setTimeout(()=>{setMessage('')},5000)
	if(message.substr(0,10)==='a new blog'){
		return <div className='message'><h2>{message}</h2></div>		
	}
	return <div className='error'><h2>{message}</h2></div>
}

export default Message