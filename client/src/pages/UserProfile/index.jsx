import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PostJob from '../../components/PostJob'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Container = styled.div`
  display: flex;
  background-color: #f4f5f5;
  margin-top: 20px;
`

const DivOne = styled.div`
  width: 30%;
  border-right: solid;
`

const Jobs = styled.div`
  width: 30%;
  border-right: solid;
`

const JobListed = styled.div`
  border-bottom: solid;
  padding-bottom: 10px;
`

const List = styled.div`
  margin-top: 10px;
`

const UserProfile = ({ user, postJobHandler, listJobsHandler }) => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    listJobsHandler().then(data => {
      setJobs(data)
    })
  }, [])

  return user ? (
    <Container>
      <DivOne>
        <AccountCircleIcon fontSize="large" />
        <header className="jumbotron">
          <h3>
            <strong>{user.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {user.accessToken.substring(0, 20)} ...{' '}
          {user.accessToken.substr(user.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {user.id}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <strong>Roles:</strong>
        <ul>
          {user.roles &&
            user.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </DivOne>

      <Jobs>
        <JobListed>
          Jobs listed
          {jobs &&
            jobs.map(job => (
              <div key={job.id}>
                {job.title} - {job.description}
              </div>
            ))}
          {console.log(jobs)}
        </JobListed>
        <List>
          <PostJob postJobHandler={postJobHandler} />
        </List>
      </Jobs>
    </Container>
  ) : (
    <div>You are not logged in.</div>
  )
}

export default UserProfile
