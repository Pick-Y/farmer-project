import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Modal,
  TextField,
  Grid,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Box,
  MenuItem,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextareaAutosize from '@mui/base/TextareaAutosize'

const boxStyle = {
  backgroundColor: '#fff',
  height: '800px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const styleForm = {
  display: 'flex',
  border: 'none',
  height: '80%',
  width: '80%',
  alignItems: 'center',
  justifyContent: 'center',
}

const style = {
  display: 'flex',
  bgcolor: '#fff',
  height: '40em',
  width: '40em',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 24,
}

const errorStyle = {
  fontSize: '15px',
  color: 'red',
  marginTop: '1px',
  marginBottom: '-12px',
}

const states = ['ACT', 'QLD', 'NSW', 'SA', 'TAS', 'VIC', 'WA']

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

const PostJob = ({ postJobHandler }) => {
  const [items, setItems] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [newItem, setNewItem] = useState('')

  const defaultMinimum = 20 //defines the minimum wage

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setNewItem('')
  }

  const handleInputChange = e => {
    setNewItem(e.target.value)
  }

  const addItem = item => {
    console.log(item)
    setItems([...items, item])
    closeModal()
  }

  const deleteItem = index => {
    const updatedItems = [...items]
    updatedItems.splice(index, 1)
    setItems(updatedItems)
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      ratePerHour: '',
      foodProvided: false,
      transportProvided: false,
      accommodationProvided: false,
      address: '',
      town: '',
      postcode: '',
      state: '',
      industry: '',
      availableFrom: '',
      availableUntil: '',
      numberOfPositions: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      ratePerHour: Yup.string().required('Required'),
      foodProvided: Yup.string().required('Required'),
      transportProvided: Yup.string().required('Required'),
      accommodationProvided: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      town: Yup.string().required('Required'),
      postcode: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      industry: Yup.string().required('Required'),
      availableFrom: Yup.string().required('Required'),
      availableUntil: Yup.string().required('Required'),
      numberOfPositions: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      // Handle form submission logic here

      const newItem = {
        id: Date.now(), // Generate a unique ID (you can use any method here)
        title: values.title,
        description: values.description,
        ratePerHour: values.ratePerHour,
        foodProvided: values.foodProvided,
        transportProvided: values.transportProvided,
        accommodationProvided: values.accommodationProvided,
        address: values.address,
        town: values.town,
        postcode: values.postcode,
        state: values.state,
        industry: values.industry,
        availableFrom: values.availableFrom,
        availableUntil: values.availableUntil,
        numberOfPositions: values.numberOfPositions,
      }

      addItem(newItem)
      postJobHandler(values)

      // Close the modal
      closeModal()
    },
  })

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          style={{ width: '108px', height: '30px', fontSize: '10px' }}
          variant="contained"
          color="primary"
          onClick={openModal}
        >
          <AddIcon fontSize="small" />
          List a job
        </Button>
      </div>

      {items.map((item, index) => (
        <Card key={index} style={{ marginTop: '16px' }}>
          <CardContent>
            <Typography variant="body1">{item.title}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              onClick={() => deleteItem(index)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}

      <Modal
        open={modalOpen}
        onClose={closeModal}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '40em',
            width: '40em',
          }}
        >
          <Box style={boxStyle}>
            <form onSubmit={formik.handleSubmit} style={styleForm}>
              <Grid container spacing={2} style={{ width: 'auto' }}>
                {/* Title */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Job Title"
                    variant="outlined"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <p style={errorStyle}>{formik.errors.title}</p>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  {/* Description */}
                  <TextareaAutosize
                    minRows={4}
                    style={{ width: '98.8%' }}
                    id="description"
                    name="description"
                    label="description"
                    variant="outlined"
                    placeholder="Type Job Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.description && formik.errors.description ? (
                    <p style={errorStyle}>{formik.errors.description}</p>
                  ) : null}
                </Grid>
                {/* Hourly Rate */}
                <Grid item xs={6}>
                  <TextField
                    type="number"
                    name="ratePerHour"
                    label="$/hr"
                    inputProps={{
                      min: defaultMinimum,
                    }}
                    value={formik.values.ratePerHour}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.ratePerHour && formik.errors.ratePerHour ? (
                    <p style={errorStyle}>{formik.errors.ratePerHour}</p>
                  ) : null}
                </Grid>

                {/* Food */}
                <Grid item xs={6}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="foodProvided"
                          label="foodProvided"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.foodProvided}
                          color="primary"
                        />
                      }
                      label="Food Provided"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="transportProvided"
                          label="transportProvided"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.transportProvided}
                          color="primary"
                        />
                      }
                      label="Transport Provided"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="accommodationProvided"
                          label="accommodationProvided"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.accommodationProvided}
                          color="primary"
                        />
                      }
                      label="Accommodation Provided"
                    />
                  </FormGroup>
                </Grid>

                {/* Address */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    variant="outlined"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <p style={errorStyle}>{formik.errors.address}</p>
                  ) : null}
                </Grid>

                {/* Town */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="town"
                    label="Town"
                    variant="outlined"
                    value={formik.values.town}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.town && formik.errors.town ? (
                    <p style={errorStyle}>{formik.errors.town}</p>
                  ) : null}
                </Grid>

                {/* Postcode */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="postcode"
                    label="Postcode"
                    variant="outlined"
                    value={formik.values.postcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.postcode && formik.errors.postcode ? (
                    <p style={errorStyle}>{formik.errors.postcode}</p>
                  ) : null}
                </Grid>

                {/*State*/}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
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
                    <p style={errorStyle}>{formik.errors.state}</p>
                  ) : null}
                </Grid>

                {/*Industry*/}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="industry"
                    select
                    label="Industry"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.industry}
                  >
                    {industryTypes.map(state => (
                      <MenuItem value={state} key={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </TextField>
                  {formik.touched.industry && formik.errors.industry ? (
                    <p style={errorStyle}>{formik.errors.industry}</p>
                  ) : null}
                </Grid>

                {/*Date From*/}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Date From"
                    type="date"
                    name="availableFrom"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.availableFrom}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  {formik.touched.availableFrom &&
                  formik.errors.availableFrom ? (
                    <p style={errorStyle}>{formik.errors.availableFrom}</p>
                  ) : null}
                </Grid>

                {/*Date To*/}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Date To"
                    type="date"
                    name="availableUntil"
                    value={formik.values.availableUntil}
                    onChange={formik.handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  {formik.touched.availableUntil &&
                  formik.errors.availableUntil ? (
                    <p style={errorStyle}>{formik.errors.availableUntil}</p>
                  ) : null}
                </Grid>

                {/* Number of Positions */}
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    type="number"
                    name="numberOfPositions"
                    label="Number of position needed"
                    value={formik.values.numberOfPositions}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.numberOfPositions &&
                  formik.errors.numberOfPositions ? (
                    <p style={errorStyle}>{formik.errors.numberOfPositions}</p>
                  ) : null}
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" color="primary">
                    ADD
                  </Button>

                  <Button color="secondary" onClick={closeModal}>
                    cancel
                  </Button>
                </Grid>
              </Grid>
              {/* <Grid container spacing={2}  style={{ width: "auto" }}>
      <Grid item xs={12}>
        <TextField label="Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Email" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          minRows={4}
          maxRows={8}
          placeholder="Message"
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Grid> */}
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  )
}

export default PostJob
