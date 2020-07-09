import React from "react";

const BeerItem = ({ name, date, desc, malts, hops, yeast, img, id }) => {
  return (
    <div className='beer-item'>
      <div className='col-1'>
        <h1>Name: {name}</h1>
        <p>Date: {date}</p>
        <p>Description: {desc}</p>
        <p>ID: {id}</p>
        <h3>
          {/* <a
            href={`/beer-info/${id}`}
            props={(name, date, desc, malts, hops, yeast, img, id)}
          >
            More Info
          </a> */}
        </h3>
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
