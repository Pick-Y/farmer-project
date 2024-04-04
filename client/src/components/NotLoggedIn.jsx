import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const CenteredDiv = styled.div`
  width: 40%;
  height: 400px;
  margin-top: 150px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  justify-content: center;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-color: #1876d1;
`

const MessageDiv = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  justify-content: center;
  text-align: center;
`

const IconMargin = styled.div`
  padding-top: 30px;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  justify-content: center;
  text-align: center;
`

const NotLoggedIn = () => {
  return (
    <CenteredDiv>
      <MessageDiv>
        <IconMargin></IconMargin>

        <h1>Login required!</h1>
        <p>
          Please continue <Link to="/login">here</Link> to login
        </p>
      </MessageDiv>
    </CenteredDiv>
  )
}

export default NotLoggedIn
