import axios from 'axios'

axios.defaults.auth = {
  username: 'admin',
  password: 'supersecret'
}

axios.defaults.baseURL =
  'https://us-central1-bargain-basement.cloudfunctions.net/api'
