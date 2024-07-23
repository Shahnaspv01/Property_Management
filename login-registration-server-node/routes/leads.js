const express = require('express');
const Lead = require('../models/Lead');
const PropertyCard = require('../models/PropertyCard');

const router = express.Router();

// Create Lead and Link to Property Card
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, propertyCardId } = req.body;

  try {
    const propertyCard = await PropertyCard.findById(propertyCardId);

    if (!propertyCard) {
      return res.status(404).json({ message: 'Property card not found' });
    }

    const lead = new Lead({ firstName, lastName, email, phoneNumber, propertyCard: propertyCardId });
    await lead.save();

    propertyCard.leads.push(lead);
    await propertyCard.save();

    res.status(201).json({ message: 'Lead created and linked successfully', lead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
