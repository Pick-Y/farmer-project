import React from 'react'
import {
  Box,
  TextField,
  Unstable_Grid2 as Grid,
  MenuItem,
  Button,
} from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const boxStyle = {
  height: '800px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const styleForm = {
  display: 'flex',
  border: 'none',
  width: '40%',
  alignItems: 'center',
  justifyContent: 'center',
}

const FarmerRegistration = ({ registerHandler }) => {
  const formik = useFormik({
    initialValues: {
      businessName: '',
      tradingAs: '',
      address: '',
      town: '',
      postcode: '',
      state: '',
      email: '',
      industry: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required('Required'),
      tradingAs: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      town: Yup.string().required('Required'),
      postcode: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      industry: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      ),
    }),
    onSubmit: registerHandler,
  })

  const industryTypes = [
    'TourismAndHospitality',
    'PlantAndCultivation',
    'FishingAndPearling',
    'TreeFarmingAndFelling',
    'Mining',
    'Construction',
    'BushfireRecovery',
    'FloodRecovery',
    'HealthcareAndMedical',
  ]

  const states = ['ACT', 'QLD', 'NSW', 'SA', 'TAS', 'VIC', 'WA']

  return (
    <Box style={boxStyle} noValidate autoComplete="off">
      <form onSubmit={formik.handleSubmit} style={styleForm}>
        <Grid container spacing={2} style={{ width: 'auto' }}>
          <h1>Farmer Registration Form </h1>
          {/* Business Name */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="businessName"
              name="businessName"
              label="Business name"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.businessName}
            />
            {formik.touched.businessName && formik.errors.businessName ? (
              <div>{formik.errors.businessName}</div>
            ) : null}
          </Grid>

          {/* Trading as */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="tradingAs"
              name="tradingAs"
              label="Trading as"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tradingAs}
            />
            {formik.touched.tradingAs && formik.errors.tradingAs ? (
              <div>{formik.errors.tradingAs}</div>
            ) : null}
          </Grid>

          {/* address */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="address"
              name="address"
              label="Address"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div>{formik.errors.address}</div>
            ) : null}
          </Grid>

          {/* Town */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="town"
              name="town"
              label="Town"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.town}
            />
            {formik.touched.town && formik.errors.town ? (
              <div>{formik.errors.town}</div>
            ) : null}
          </Grid>

          {/* Postcode */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="postcode"
              name="postcode"
              label="Postcode"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postcode}
            />
            {formik.touched.postcode && formik.errors.postcode ? (
              <div>{formik.errors.postcode}</div>
            ) : null}
          </Grid>

          {/* State */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="state"
              name="state"
              select
              label="State"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            >
              {states.map(state => (
                <MenuItem value={state} key={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
            {formik.touched.state && formik.errors.state ? (
              <div>{formik.errors.state}</div>
            ) : null}
          </Grid>

          {/* email */}
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

          {/*Industry */}
          <Grid xs={6}>
            <TextField
              fullWidth
              id="industry"
              name="industry"
              select
              label="Industry"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.industry}
            >
              {industryTypes.map(industry => (
                <MenuItem value={industry} key={industry}>
                  {industry.replace(/([A-Z])/g, ' $1').trim()}
                </MenuItem>
              ))}
            </TextField>
            {formik.touched.industry && formik.errors.industry ? (
              <div>{formik.errors.industry}</div>
            ) : null}
          </Grid>

          {/*Password */}
          <Grid xs={12}>
            <TextField
              fullWidth
              id="password"
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

export default FarmerRegistration
