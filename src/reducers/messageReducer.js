const messageReducer = (state='', action) =>{
	switch(action.type){
		case 'GET_MESSAGE':
			return state
		case 'SET_MESSAGE':
			console.log('action is', action)
			return action.rmessage
		default:
			return state
	}
	
}

export const setMessageRedux=(rmessage)=>({type:'SET_MESSAGE', rmessage})


export default messageReducer