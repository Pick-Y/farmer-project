const moment = require('moment')
const db = require('../db/models')
const JobPost = db.jobPost

exports.getJobPosts = ({ userId }, res) => {
  JobPost.findAll()
    .then(jobs => {
      res.send(jobs)
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

exports.saveJobPost = ({ body, userId }, res) => {
  JobPost.create({
    title: body.title,
    description: body.description,
    farmerId: userId,
    foodProvided: body.foodProvided,
    transportProvided: body.transportProvided,
    accommodationProvided: body.accommodationProvided,
    ratePerHour: body.ratePerHour,
    address: body.address,
    town: body.town,
    postcode: body.postcode,
    state: body.state,
    industry: body.industry,
    availableFrom: moment(body.availableFrom, 'YYYY/MM/DD'),
    availableUntil: moment(body.availableUntil, 'YYYY/MM/DD'),
    numberOfPositions: body.numberOfPositions,
    status: 'Draft',
  })
    .then(_ => {
      res.send({ message: 'Job post was successfully saved!' })
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}
