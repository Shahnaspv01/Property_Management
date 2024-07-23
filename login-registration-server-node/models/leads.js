const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leadSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  propertyCard: { type: Schema.Types.ObjectId, ref: 'PropertyCard', required: true }
});

module.exports = mongoose.model('Lead', leadSchema);
