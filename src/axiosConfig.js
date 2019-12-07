import axios from 'axios'

export const projectAPI = axios.create()

projectAPI.defaults.auth = {
  username: 'admin',
  password: 'supersecret'
}
projectAPI.defaults.baseURL =
  'https://us-central1-bargain-basement.cloudfunctions.net/api'
