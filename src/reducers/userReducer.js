const userReducer = (state=null, action) =>{
	switch(action.type){
		case 'SET_USER':
			console.log('user was set', action)
			return action.ruser
		default:
			return state
	}
}

export const setUserRedux=ruser=>({type:'SET_USER', ruser})

export default userReducer