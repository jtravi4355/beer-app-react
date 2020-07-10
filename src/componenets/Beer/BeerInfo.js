import React, { useEffect, useState } from "react";
import "./BeerInfo.css";

const BeerInfo = ({ match }) => {
  const [beer, setBeer] = useState({
    ingredients: { malt: [], hops: [], yeast: {} },
  });
  console.log(match.params.id);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers/${match.params.id}`
      );
      const data = await res.json();

      setBeer(data[0]);
    };

    fetchItem();
  }, []);
  console.log(beer.ingredients["malt"]);
  return (
    <section className='beer-info'>
      <div className='beer-info-box'>
        <div className='beer-info-title'>
          <h1>{beer.name}</h1>
          <h3>{beer.tagline}</h3>
        </div>
        <div className='beer-info-grid'>
          <div className='grid-col-1'>
            <div className='beer-info-img'>
              <img src={beer.image_url} alt='' />
            </div>
          </div>
          <div className='grid-col-2'>
            <div className='beer-info-details'>
              <h3>Details:</h3>
              <p>IBU: {beer.ibu}</p>
              <p>ABV: {beer.abv}</p>
              <p>Description: {beer.description}</p>
            </div>
          </div>
          <div className='grid-col-3'>
            <div className='beer-info-ingredients'>
              <h3>Ingredients:</h3>
              <div className='beer-info-malts'>
                <h5>Malts</h5>
                <ul>
                  {beer.ingredients.malt.map(item => {
                    return <li>{item.name}</li>;
                  })}
                </ul>
              </div>
              <div className='beer-info-hops'>
                <h5>Hops</h5>
                <ul>
                  {beer.ingredients.hops.map(item => {
                    return (
                      <li>
                        {item.name} | Add: {item.add}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeerInfo;
