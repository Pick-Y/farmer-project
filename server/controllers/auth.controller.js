const moment = require('moment')
const db = require('../db/models')
const config = require('../auth.config')
const Backpacker = db.backpacker
const Farmer = db.farmer
const User = db.user

var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

exports.signupBackpacker = (req, res) => {
  // Save User to Database
  User.addHook('afterCreate', 'createBackpacker', (user, _) => {
    Backpacker.create({
      userId: user.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dob: moment(req.body.dob, 'DD/MM/YYYY'),
      nationality: req.body.nationality,
      visa: req.body.visa,
      education: req.body.education,
      workingRights: req.body.workingRights,
      gender: req.body.gender,
      status: 'Pending',
    })
      .then(_ => {
        User.removeHook('afterCreate', 'createBackpacker')
        res.send({ message: 'User was successfully registered!' })
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  })

  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: 'Backpacker',
  }).catch(err => {
    res.status(500).send({ message: err.message })
  })
}

exports.signupFarmer = ({ body }, res) => {
  // Save User to Database
  User.addHook('afterCreate', 'createFarmer', (user, _) => {
    Farmer.create({
      userId: user.id,
      businessName: body.businessName,
      tradingAs: body.tradingAs,
      address: body.address,
      town: body.town,
      postcode: body.postcode,
      state: body.state,
      industry: body.industry,
      status: 'Pending',
    }).then(_ => {
      User.removeHook('afterCreate', 'createFarmer')
      res.send({ message: 'Farmer was successfully registered!' })
    })
  })

  User.create({
    email: body.email,
    password: bcrypt.hashSync(body.password, 8),
    role: 'Farmer',
  }).catch(err => {
    res.status(500).send({ message: err.message })
  })
}

exports.signin = (req, res) => {
  User.findOne({
    include: [
      {
        model: Backpacker,
        as: 'backpackers',
      },
      {
        model: Farmer,
        as: 'farmers',
      },
    ],
    where: {
      email: req.body.email,
    },
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' })
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        })
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      })

      res.status(200).send({
        id: user.id,
        email: user.email,
        role: user.role,
        accessToken: token,
      })
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}
