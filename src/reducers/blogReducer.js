import blogService from '../services/blogs'

const blogReducer = (state=[],action) =>{
	switch(action.type){
		case 'INIT_BLOGS':
			return action.data
		case 'ADD_BLOG':
			console.log('newBlogs', action.data)
			const newBlogs=state.concat(action.data)
			return newBlogs
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

//test this later if we move posting blog to reducer
// export const addBlog = (blogData, token) => {
// 	return async dispatch => {
// 		const blog = await blogService.postBlog(blogData, token)
// 		dispatch({type: 'ADD_BLOG', data: blog})
// 	}
// }

export default blogReducer