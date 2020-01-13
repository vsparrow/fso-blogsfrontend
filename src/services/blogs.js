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

export default { getAll, login, postBlog }