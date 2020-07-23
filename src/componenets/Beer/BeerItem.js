import React from "react";
import { Link } from "react-router-dom";

const BeerItem = ({ name, date, desc, img, id }) => {
  return (
    <div className='beer-item'>
      <div className='col-1'>
        <h1>Name: {name}</h1>
        <p>Date: {date}</p>
        <p>Description: {desc}</p>
        <p>ID: {id}</p>

        <Link to={`/beer/${id}`}>
          <h3>More Info</h3>
        </Link>
      </div>

      <div className='col-3'>
        <div className='img-container'>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default BeerItem;
