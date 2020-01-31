const userReducer = (state=null, action) =>{
	switch(action.type){
		case 'SET_USER':
			return action.ruser
		default:
			return state
	}
}

export const setUserRedux=ruser=>({type:'SET_USER', ruser})

export default userReducer