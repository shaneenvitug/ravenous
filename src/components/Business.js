import React from "react";

function Business(props) {
  
  return (
    <div>
      <img src={props.business.imageSrc} alt={props.business.name} />
      <h2>{props.business.name}</h2>
      <div>
        <div>{props.business.address}</div>
        <div>{props.business.city}</div>
        <div>{props.business.state} {props.business.zipCode}</div>
      </div>
      <div>{props.business.category}</div>
      <div>{props.business.rating} stars</div>
      <div>{props.business.reviewCount} reviews</div>
    </div>
  )
}

export default Business;