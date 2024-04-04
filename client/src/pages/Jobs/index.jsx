import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import NotLoggedIn from '../../components/NotLoggedIn'

const extractParams = searchParams =>
  Array.from(searchParams.entries()).reduce((acc, item) => {
    return {
      ...acc,
      [item[0]]: item[1],
    }
  }, {})

const JobsContainer = styled.div`
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
`

const Jobs = ({ authenticated }) => {
  const [searchParams] = useSearchParams()
  const { type, state } = extractParams(searchParams)

  return (
    <JobsContainer>
      {authenticated ? (
        <p>
          List of jobs available for {type} in {state}
        </p>
      ) : (
        <NotLoggedIn />
      )}
    </JobsContainer>
  )
}

export default Jobs
