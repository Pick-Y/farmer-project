import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Box, TextField, Unstable_Grid2 as Grid, Button } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { styled } from '@mui/system'
import { GridLoader } from 'react-spinners'

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '20em',
})

const Login = ({ authenticated, loginHandler }) => {
  let navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (authenticated) {
      return navigate('/profile')
    }
  }, [authenticated])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      setLoading(true)
      setTimeout(() => {
        loginHandler(values) //check Context folder -> UserContext.jsx
          .then(() => {
            setLoading(false)
          })
          .catch(() => setLoading(false))
      }, 2000)
    },
  })

  return loading ? (
    <StyledBox style={{ marginTop: '20em' }}>
      <GridLoader color="#36d7b7" />
    </StyledBox>
  ) : (
    <StyledBox noValidate autoComplete="off">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} style={{ width: 'auto' }}>
          <h1> Login</h1>
          {/* Email */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </Grid>

          {/*Password */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </Grid>

          <Grid xs={12}>
            <Button type="submit" fullWidth variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div>
        or <Link to="/register">register</Link>
      </div>
    </StyledBox>
  )
}

export default Login
