import React, { useEffect, useState } from "react";
import BeerItem from "./BeerItem";

const BeerList = ({ beers }) => {
  return (
    <>
      <div className='beers'>
        {beers.map(beer => (
          <BeerItem
            name={beer.name}
            date={beer.first_brewed}
            desc={beer.description}
            id={beer.id}
            img={beer.image_url}
          />
        ))}
      </div>
    </>
  );
};

export default BeerList;
