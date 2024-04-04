import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import BackPackerRegistration from './backPackerRegistration'
import FarmerRegistration from './farmerRegistration'

const Register = ({ registerHandler }) => {
  const navigate = useNavigate()
  const { role } = useParams()

  const handleRegistration = role => values => {
    registerHandler(role, values)
      .then(_ => navigate('/register/successful'))
      .catch(_ => navigate('/register/failed'))
  }

  return (
    <div>
      {role === 'farmer' && (
        <FarmerRegistration registerHandler={handleRegistration(role)} />
      )}
      {role === 'backpacker' && (
        <BackPackerRegistration registerHandler={handleRegistration(role)} />
      )}
    </div>
  )
}

export default Register
