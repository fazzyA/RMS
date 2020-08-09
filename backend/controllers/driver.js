const Driver = require('../models/Driver');

// @desc      Get all Driver
// @route     GET /api/v1/drivers
// @access    Public
exports.getDrivers = async (req, res, next) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json({ success: true, data: drivers });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc      Create Driver
// @route     Post /api/v1/driver
// @access    Public
exports.createDriver = async (req, res, next) => {
  try {
    const driver = await Driver.create(req.body);

    res.status(201).json({
      success: true,
      dbid: driver._id
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc      Update Driver w.r.t ID
// @route     GET /api/v1/drivers/:id
// @access    Public
exports.updateDriver = async (req, res, next) => {
  try {
    const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    console.log(driver);
    res.status(200).json({
      success: true,
      data: driver
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc      Get all Driver
// @route     GET /api/v1/drivers
// @access    Public
exports.deleteDriver = async (req, res, next) => {
  try {
    const drivers = await Driver.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: drivers });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc      Get all Driver
// @route     GET /api/v1/drivers
// @access    Public
exports.getDriver = async (req, res, next) => {
  try {
    const drivers = await Driver.findById(req.params.id);
    res.status(200).json({ success: true, data: drivers });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc      Get all nearby Driver
// @route     GET /api/v1/drivers/nearby
// @access    Public
exports.getNearByDrivers = async (req, res, next) => {
  const longitude = req.params.long;
  const latitude = req.params.lat;
  const distance = 1; // get with in 1km.
  try {
    const drivers = await Driver.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          // "maxDistance": (100 * 1609.34), // miles to meter
          maxDistance: distance * 1000,
          distanceMultiplier: 0.001,
          spherical: true,
          distanceField: 'distance'
          // "distanceMultiplier": 0.000621371
        }
      }
    ]);
    res.status(200).json({ success: true, data: drivers });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }
};
