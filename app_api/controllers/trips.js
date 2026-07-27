const mongoose = require('../../app_server/models/db');
const Trip = mongoose.model('trips');

const tripsList = async function(req, res) {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  tripsList
};