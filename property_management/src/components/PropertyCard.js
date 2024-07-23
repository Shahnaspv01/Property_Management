// src/PropertyCard.js
import React, { useState } from 'react';
import { COMMUNITIES, BUILDINGS } from './constants';

const PropertyCard = () => {
  const [formData, setFormData] = useState({
    community: COMMUNITIES[0], // Default to first value in COMMUNITIES enum
    building: BUILDINGS[0], // Default to first value in BUILDINGS enum
    unitNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., save to database, update state, etc.)
    console.log('Submitted:', formData);
    // Reset form after submission
    setFormData({
      community: COMMUNITIES[0],
      building: BUILDINGS[0],
      unitNo: ''
    });
  };
  


  return (
     <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Property Card</h3>

          <div className="mb-3">
          <div>
          <label htmlFor="community">Community:</label>
          <select id="community" name="community" value={formData.community} onChange={handleChange}>
            {COMMUNITIES.map((community) => (
              <option key={community} value={community}>{community}</option>
            ))}
          </select>
        </div>
          </div>

          <div className="mb-3">
          <label htmlFor="building">Building:</label>
          <select id="building" name="building" value={formData.building} onChange={handleChange}>
            {BUILDINGS.map((building) => (
              <option key={building} value={building}>{building}</option>
            ))}
          </select>
          </div>
          
          <div className="mb-3">
          <label htmlFor="unitNo">Unit No:</label>
          <input
            type="text"
            id="unitNo"
            name="unitNo"
            value={formData.unitNo}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyCard;
