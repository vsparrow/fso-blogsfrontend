import axios from 'axios'
// const baseUrl = '/api/blogs'
const baseUrl = 'http://korea-ide-api.run.goorm.io/api/login'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const login = async credentials => {
	console.log('credentials is:', credentials)
	console.log('baseUrl is:', baseUrl)
	
	const response = await axios.post(baseUrl, credentials)
	return response.data
}

export default { getAll, login }