import axios from 'axios'
// const baseUrl = '/api/blogs'
const baseUrl = 'korea-ide-api.run.goorm.io/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }