const express = require('express');
const PropertyCard = require('../models/PropertyCard');

const router = express.Router();

// Create Property Card
router.post('/', async (req, res) => {
  const { community, building, unitNo } = req.body;

  try {
    const propertyCard = new PropertyCard({ community, building, unitNo });
    await propertyCard.save();
    res.status(201).json({ message: 'Property card created successfully', propertyCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update Property Card
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { community, building, unitNo } = req.body;

  try {
    const updatedPropertyCard = await PropertyCard.findByIdAndUpdate(id, { community, building, unitNo }, { new: true });
    res.status(200).json({ message: 'Property card updated successfully', propertyCard: updatedPropertyCard });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete Property Card
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await PropertyCard.findByIdAndDelete(id);
    res.status(200).json({ message: 'Property card deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
