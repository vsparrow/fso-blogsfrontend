const userReducer = (state=null, action) =>{
	switch(action.type){
		case 'SET_USER':
			console.log('user was set', action)
			return action.ruser
		case 'CLEAR_USER':
			return null
		default:
			return state
	}
}

export const setUserRedux=ruser=>({type:'SET_USER', ruser})
export const clearUserRedux=ruser=>({type:'CLEAR_USER'})
export default userReducer