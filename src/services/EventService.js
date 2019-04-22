import axios from 'axios'

const apiRequest = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiRequest.get('/events')
  },
  getEvent(id) {
    return apiRequest.get('/events/' + id)
  }
}
