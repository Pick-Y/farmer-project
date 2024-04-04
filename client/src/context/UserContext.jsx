import React, { createContext, useState, useEffect } from 'react'
import AuthService from '../services/auth.service'

export const UserContext = createContext()

export default ({ children }) => {
  const [user, setUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  const registerHandler = (role, values) => {
    return new Promise((resolve, reject) => {
      if (role === 'farmer') {
        AuthService.registerFarmer(values)
          .then(response =>
            response.status === 200 ? resolve() : reject('Failed to register')
          )
          .catch(e => reject(e))
      } else if (role === 'backpacker') {
        AuthService.registerBackpacker(values)
          .then(response =>
            response.status === 200 ? resolve() : reject('Failed to register')
          )
          .catch(e => reject(e))
      } else {
        reject()
      }
    })
  }

  const logoutHandler = () => {
    AuthService.logout()
    setUser(null)
    setAuthenticated(false)
  }

  const loginHandler = values => {
    return new Promise((resolve, reject) =>
      AuthService.login(values)
        .then(user => {
          console.log(user)
          setUser(user)
          setAuthenticated(true)
          resolve(user)
        })
        .catch(error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setUser(null)
          setAuthenticated(false)
          reject(resMessage)
        })
    )
  }

  useEffect(() => {
    const token = AuthService.getToken()
    if (token) {
      setUser(AuthService.getCurrentUser())
      setAuthenticated(true)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        authenticated,
        setAuthenticated,
        loginHandler,
        logoutHandler,
        registerHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
