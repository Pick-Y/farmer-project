import axios from 'axios'

const API_URL = 'http://localhost:3000/api/'

const registerFarmer = ({
  businessName,
  tradingAs,
  address,
  town,
  postcode,
  state,
  email,
  industry,
  password,
}) => {
  return axios.post(API_URL + 'signup/farmer', {
    businessName,
    tradingAs,
    address,
    town,
    postcode,
    state,
    email,
    industry,
    password,
  })
}

const registerBackpacker = ({
  firstName,
  lastName,
  email,
  dob,
  nationality,
  visa,
  education,
  workingRights,
  gender,
  password,
}) => {
  return axios.post(API_URL + 'signup/backpacker', {
    firstName,
    lastName,
    email,
    password,
    dob,
    nationality,
    visa,
    education,
    gender,
    workingRights,
  })
}

const login = ({ email, password }) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then(response => {
      if (response.status === 200 && response.data.accessToken) {
        setToken(response.data)
        return response.data
      } else {
        throw new Exception('Login failed')
      }
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getToken = () => localStorage.getItem('user')
const setToken = token => localStorage.setItem('user', JSON.stringify(token))

const getCurrentUser = () => JSON.parse(getToken())

const AuthService = {
  registerFarmer,
  registerBackpacker,
  login,
  logout,
  getCurrentUser,
  getToken,
}

export default AuthService
