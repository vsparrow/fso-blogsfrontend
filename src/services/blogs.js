import axios from 'axios'
// const baseUrl = '/api/blogs'
const baseUrl = 'http://korea-ide-api.run.goorm.io'

const getAll = async () => {
  const request = await axios.get(baseUrl + '/api/blogs')
  console.log('request.data is:', request.data)
  // return request.then(response => response.data)
	return request.data
}

const login = async credentials => {
	console.log('credentials is:', credentials)
	console.log('baseUrl is:', baseUrl)
	
	const response = await axios.post(baseUrl + '/api/login', credentials)
	return response.data
}

export default { getAll, login }