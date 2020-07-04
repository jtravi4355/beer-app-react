import React from "react";

const Beer = ({ name, date, desc, malts, hops, yeast, img }) => {
  return (
    <div className='beer-item'>
      <div className='col-1'>
        <h1>Name: {name}</h1>
        <p>Date: {date}</p>
        <p>Description: {desc}</p>
      </div>
      <div className='col-2'>
        <h3>Malts</h3>
        <ul>
          {malts.map(malt => (
            <li>{malt.name}</li>
          ))}
        </ul>
        <h3>Hops</h3>
        <ul>
          {hops.map(hop => (
            <li>{hop.name}</li>
          ))}
        </ul>
        <h3>Yeast Used</h3>
        <p>{yeast}</p>
      </div>
      <div className='col-3'>
        <div className='img-container'>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Beer;
