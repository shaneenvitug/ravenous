import React from "react";
import Business from "./Business";

function BusinessList(props) {
  return (
    <div className="BusinessList">
    {
      props.businesses.map(business => {
        return <Business key={business.id} business={business} />
      })
    }
    </div>
  );
}

export default BusinessList;