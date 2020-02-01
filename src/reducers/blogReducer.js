import blogService from '../services/blogs'

const blogReducer = (state=[],action) =>{
	switch(action.type){
		case 'INIT_BLOGS':
			return action.data
		case 'ADD_BLOG':
			console.log('newBlogs', action.data)
			const newBlogs=state.concat(action.data)
			return newBlogs
		case 'DELETE_BLOG':
			const id = action.data
			const updatedBlogs = state.filter(b=>b.id !== id)
			return updatedBlogs
		case 'UPDATE_LIKES':
			const updatedLikes = state.map(b=> b.id !== action.data ? b : {...b, likes: ++b.likes})
			return updatedLikes
		default:
			return state
	}
}

export const initializeBlogs = ()=>{
	return async dispatch => {
		const blogs = await blogService.getAll()
		dispatch({type: 'INIT_BLOGS', data: blogs})
	}
}

export const addBlog = blog => dispatch => dispatch({type: 'ADD_BLOG', data: blog})

export const deleteBlog = (blog,token) => {
	return async dispatch => {
		const result = await blogService.deleteBlog(blog.id, token)
		if(result === 204){ 
			dispatch({type:'DELETE_BLOG', data: blog.id})
		}
		else{
			dispatch({type:'SET_MESSAGE', rmessage: `Error deleting blog`})
			setTimeout(()=>{dispatch({type:'SET_MESSAGE', rmessage:''})}, 5000)
		}
	}
}

export const updateLikes = (blog,token) => {
	return async dispatch => {
		//update object
		const updatedBlog = {...blog, likes : blog.likes + 1}
		try{
			const returnedBlog = await blogService.updateBlog(updatedBlog, token)
			console.log('returnedBlog is', returnedBlog)
			dispatch({type: 'UPDATE_LIKES', data: blog.id}) // <-------------------------------------------------------
		} catch(error){
			console.log(error)
		}
		


		//dispatch update
		//show error if error
	}
}
//test this later if we move posting blog to reducer
// export const addBlog = (blogData, token) => {
// 	return async dispatch => {
// 		const blog = await blogService.postBlog(blogData, token)
// 		dispatch({type: 'ADD_BLOG', data: blog})
// 	}
// }

export default blogReducer