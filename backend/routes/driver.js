const express = require('express');
const {
  getDrivers,
  getDriver,
  createDriver,
  updateDriver,
  deleteDriver,
  getNearByDrivers
} = require('../controllers/driver');

const Driver = require('../models/Driver');

const router = express.Router({ mergeParams: true });

router.route('/').get(getDrivers).post(createDriver);

router.route('/:id').get(getDriver).put(updateDriver).delete(deleteDriver);

router.route('/nearby/:long/:lat').get(getNearByDrivers);

module.exports = router;
