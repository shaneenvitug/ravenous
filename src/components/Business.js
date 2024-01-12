import React from "react";

function Business(props) {
  
  return (
    <div>
      <img src={props.business.image_url} alt={props.business.name} />
      <h2>{props.business.name}</h2>
      <div>
        <div>{props.business.location.address1}</div>
        <div>{props.business.location.city}</div>
        <div>{props.business.location.state} {props.business.location.zip_code}</div>
      </div>
      <div>
        {
          props.business.categories.map(category => {
            return <span key={category.alias}>{category.title}</span>
        })
        }
      </div>
      <div>{props.business.rating} stars</div>
      <div>{props.business.review_count} reviews</div>
    </div>
  )
}

export default Business;