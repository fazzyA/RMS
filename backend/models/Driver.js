const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DriverSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Rider name'],
    maxlength: [70, 'max length reached.']
  },
  vehicleregnumber: {
    type: String,
    required: [true, 'Please add reg#'],
    unique: [true, 'reg num exists'],
    index: true
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
      sparse: true
    }
  },

  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

DriverSchema.post('save', function (doc) {
  doc.lastUpdate = Date.now();
});

module.exports = mongoose.model('Driver', DriverSchema);
