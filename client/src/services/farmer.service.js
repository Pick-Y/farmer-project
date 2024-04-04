import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:3000/api/'

const getJobPosts = () =>
  axios.get(API_URL + 'farmer/jobPosts', { headers: authHeader() })

const saveJobPost = ({
  title,
  description,
  ratePerHour,
  foodProvided,
  transportProvided,
  accommodationProvided,
  address,
  town,
  postcode,
  state,
  industry,
  availableFrom,
  availableUntil,
  numberOfPositions,
}) => {
  return axios.post(
    API_URL + 'farmer/jobPost',
    {
      title,
      description,
      ratePerHour,
      foodProvided,
      transportProvided,
      accommodationProvided,
      address,
      town,
      postcode,
      state,
      industry,
      availableFrom,
      availableUntil,
      numberOfPositions,
    },
    { headers: authHeader() }
  )
}

const CustomerService = {
  saveJobPost,
  getJobPosts,
}

export default CustomerService
