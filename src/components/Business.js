import React from "react";

function Business() {
  const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  }

  // should display an image, name, address, city, state, zipcode, category, rating and review count
  return (
    <div>
      <img src={business.imageSrc} alt={business.name} />
      <h2>{business.name}</h2>
      <div>
        <div>{business.address}</div>
        <div>{business.city}</div>
        <div>{business.state} {business.zipCode}</div>
      </div>
      <div>{business.category}</div>
      <div>{business.rating} stars</div>
      <div>{business.reviewCount} reviews</div>
    </div>
  );
}

export default Business;