import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Register from './pages/Register'
import RegistrationSuccessful from './pages/RegistrationSuccessful'
import RegistrationFailed from './pages/RegistrationFailed'
import UserProfile from './pages/UserProfile'
import FarmerDashboard from './pages/FarmerDashboard'
import BackpackerDashboard from './pages/BackpackerDashboard'
import Jobs from './pages/Jobs'
import Header from './components/Header'
import AuthVerify from './components/AuthVerify'
import { UserContext } from './context/UserContext'
import { FarmerContext } from './context/FarmerContext'

const AppRoutes = () => {
  const { user, authenticated, loginHandler, logoutHandler, registerHandler } =
    useContext(UserContext)

  const { postJobHandler, listJobsHandler } = useContext(FarmerContext)

  return (
    <div>
      <Header user={user} logoutHandler={logoutHandler} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login authenticated={authenticated} loginHandler={loginHandler} />
          }
        />
        <Route
          path="/register/:role"
          element={<Register registerHandler={registerHandler} />}
        />
        <Route
          path="/profile"
          element={
            <UserProfile
              user={user}
              postJobHandler={postJobHandler}
              listJobsHandler={listJobsHandler}
            />
          }
        />
        <Route path="/backpacker" element={<BackpackerDashboard />} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/jobs" element={<Jobs authenticated={authenticated} />} />
        <Route
          path="/register/successful"
          element={<RegistrationSuccessful />}
        />
        <Route path="/register/failed" element={<RegistrationFailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <AuthVerify logOut={logoutHandler} />
    </div>
  )
}

export default AppRoutes
