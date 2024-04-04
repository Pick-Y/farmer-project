import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import UserService from '../../services/user.service'
import Map from '../../components/Map'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    UserService.getPublicContent().then(
      response => setContent(response.data),
      error => {
        const errorContent =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()

        setContent(errorContent)
      }
    )
  }, [])

  return (
    <Container>
      {content}
      <Map />
    </Container>
  )
}

export default Home
