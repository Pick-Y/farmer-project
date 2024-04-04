import React, { useMemo } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import countryList from 'react-select-country-list'
import {
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  FormGroup,
  Card,
  TextField,
  Unstable_Grid2 as Grid,
} from '@mui/material'

const styleForm = {
  display: 'flex',
  border: 'none',
  width: '40%',
  alignItems: 'center',
  justifyContent: 'center',
}
//this code centers the form inside the box
const boxStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const BackPackerRegistration = ({ registerHandler }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dob: '',
      nationality: '',
      email: '',
      visa: '',
      education: '',
      gender: '',
      password: '',
      confirmPassword: '',
      workingRights: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      dob: Yup.string().required('Required'),
      nationality: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      visa: Yup.string().required('Required'),
      education: Yup.string().required('Required'),
      gender: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    }),
    onSubmit: registerHandler,
  })

  //this uses the countryList library to create an array of all countries
  const countries = useMemo(() => countryList().getData(), [])

  return (
    <Box style={boxStyle} noValidate autoComplete="off">
      <form onSubmit={formik.handleSubmit} style={styleForm}>
        <Grid container spacing={2} style={{ width: 'auto' }}>
          <h1> Backpacker Registration Form</h1>
          {/* First Name */}
          <Grid xs={6} md={6}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First name"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </Grid>

          {/* Last Name */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last name"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </Grid>

          {/* Dob */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="dob"
              name="dob"
              label="Date of birth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div>{formik.errors.dob}</div>
            ) : null}
          </Grid>

          {/* Nationality */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="nationality"
              name="nationality"
              select
              label="Nationality"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nationality}
            >
              {countries.map(option => (
                <MenuItem key={option.value} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {formik.touched.nationality && formik.errors.nationality ? (
              <div>{formik.errors.nationality}</div>
            ) : null}
          </Grid>

          {/* Email */}
          <Grid xs={6}>
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

          {/* Visa */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="visa"
              name="visa"
              select
              label="Visa"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.visa}
            >
              <MenuItem value={'WH'}>Working Holiday</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
            </TextField>
            {formik.touched.visa && formik.errors.visa ? (
              <div>{formik.errors.visa}</div>
            ) : null}
          </Grid>

          {/* Working rights */}
          <Grid xs={6}>
            <FormGroup>
              <Card variant="outlined" sx={{ padding: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="workingRights"
                      name="workingRights"
                      label="Working Rights"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.workingRights}
                    />
                  }
                  label="Are you allowed to work in Australia?"
                />
              </Card>
            </FormGroup>
          </Grid>

          {/* Education */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="education"
              name="education"
              select
              label="Education"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.education}
            >
              <MenuItem value={'Master'}>Master Degree</MenuItem>
              <MenuItem value={'Bachelor'}>Bachelor Degree</MenuItem>
              <MenuItem value={'HighSchool'}>High School</MenuItem>
              <MenuItem value={'Trade'}>Trade</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
            </TextField>
            {formik.touched.education && formik.errors.education ? (
              <div>{formik.errors.education}</div>
            ) : null}
          </Grid>

          {/* Gender */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="gender"
              name="gender"
              select
              label="Gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'NonBinary'}>Non Binary</MenuItem>
              <MenuItem value={'NotSay'}>Prefer not to say</MenuItem>
            </TextField>
            {formik.touched.gender && formik.errors.gender ? (
              <div>{formik.errors.gender}</div>
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

          {/* Confirm Password */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm password"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div>{formik.errors.confirmPassword}</div>
            ) : null}
          </Grid>
          <Grid xs={12}>
            <Button type="submit" fullWidth variant="contained">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default BackPackerRegistration
