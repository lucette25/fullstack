import axios from 'axios'



const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }

export default {create,getAll,deletePerson}