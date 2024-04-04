import React, { createContext } from 'react'
import FarmerService from '../services/farmer.service'

export const FarmerContext = createContext()

export default ({ children }) => {
  const postJobHandler = values => {
    return new Promise((resolve, reject) => {
      FarmerService.saveJobPost(values)
        .then(response =>
          response.status === 200
            ? resolve()
            : reject('Failed to save a job post')
        )
        .catch(e => reject(e))
    })
  }

  const listJobsHandler = () => {
    return new Promise((resolve, reject) => {
      FarmerService.getJobPosts()
        .then(response =>
          response.status === 200
            ? resolve(response.data)
            : reject('Failed to retrieve job posts')
        )
        .catch(e => reject(e))
    })
  }

  return (
    <FarmerContext.Provider
      value={{
        postJobHandler,
        listJobsHandler,
      }}
    >
      {children}
    </FarmerContext.Provider>
  )
}
