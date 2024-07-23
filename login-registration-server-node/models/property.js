const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const propertyCardSchema = new Schema ({
  community: { type: String, enum: ['CommunityA', 'CommunityB'], required: true },
  building: { type: String, enum: ['BuildingA', 'BuildingB'], required: true },
  unitNo: { type: String, required: true },
  leads: [{ type: Schema.Types.ObjectId, ref: 'Lead' }]
});

module.exports = mongoose.model('PropertyCard', propertyCardSchema);
