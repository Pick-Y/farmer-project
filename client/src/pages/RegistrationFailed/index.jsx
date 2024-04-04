import React from 'react'
import styled from 'styled-components'
import ErrorIcon from '@mui/icons-material/Error'

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

const RegistrationFailed = () => {
  return (
    <CenteredDiv>
      <MessageDiv>
        <IconMargin>
          <ErrorIcon color="error" fontSize="large" />
        </IconMargin>
        <h1>Something went wrong</h1>
        <p>Please try register again</p>
      </MessageDiv>
    </CenteredDiv>
  )
}

export default RegistrationFailed
