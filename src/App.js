import React, { useEffect, useState } from 'react';
import axios from 'axios';
// 

const App = () => {
  const [productListings, setProductListings] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [mileageFilter, setMileageFilter] = useState('');

  useEffect(() => {
    fetchProductListings();
  }, []);

  const fetchProductListings = async () => {
    try {
      const response = await axios.get('/api/oem-specs');
      setProductListings(response.data.specs);
    } catch (error) {
      console.error(error);
    }
  };

  const applyFilters = () => {
    // Filter logic based on priceFilter, colorFilter, mileageFilter
    // Make API call with filter parameters and update productListings
    // Example:
    // const response = await axios.get(`/api/oem-specs?price=${priceFilter}&color=${colorFilter}&mileage=${mileageFilter}`);
    // setProductListings(response.data.specs);
  };

  return (
    <div>
      <h1>Product Listings</h1>

      {/* Filters */}
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />

        <label>Color:</label>
        <input
          type="text"
          value={colorFilter}
          onChange={(e) => setColorFilter(e.target.value)}
        />

        <label>Mileage:</label>
        <input
          type="text"
          value={mileageFilter}
          onChange={(e) => setMileageFilter(e.target.value)}
        />

        <button onClick={applyFilters}>Apply Filters</button>
      </div>

      {/* Product Listings */}
      <div>
        {productListings.map((listing) => (
          <div key={listing.id}>
            <h3>{listing.manufacturer} {listing.model_name} ({listing.year})</h3>
            <p>Price: {listing.list_price}</p>
            <p>Colors: {listing.colors}</p>
            <p>Mileage: {listing.mileage}</p>
            <p>Power: {listing.power}</p>
            <p>Max Speed: {listing.max_speed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
