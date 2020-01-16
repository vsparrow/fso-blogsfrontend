import axios from 'axios'
// const baseUrl = '/api/blogs' //for build
const baseUrl = 'http://korea-ide-api.run.goorm.io' //for dev

const getAll = async () => {
  	const request = await axios.get(baseUrl + '/api/blogs')
	return request.data
}

const login = async credentials => {
	const response = await axios.post(baseUrl + '/api/login', credentials)
	return response.data
}

const postBlog =  async (newBlogData,token) => {
	const setToken = `bearer ${token}`
	const headers = { headers: {Authorization: setToken} }
	const response = await axios.post(baseUrl + '/api/blogs', newBlogData, headers)
	return response.data
}

const updateBlog = async (updatedBlog,token) => {
	const setToken = `bearer ${token}`
	const headers = { headers: {Authorization: setToken} }
	const response = await axios.put(baseUrl + `/api/blogs/${updatedBlog.id}`, updatedBlog, headers)
	return response.data
}

const deleteBlog = async (id,token) => {
	const setToken = `bearer ${token}`
	const headers = { headers: {Authorization: setToken} }
	const response = await axios.delete(baseUrl + `/api/blogs/${id}`, headers)
	return response.status
}

export default { getAll, login, postBlog, updateBlog, deleteBlog }