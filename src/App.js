import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./componenets/UI/Header";
import Search from "./componenets/UI/Search";
import Beer from "./componenets/Beer/Beer";

function App() {
  const url = "https://api.punkapi.com/v2/beers/";

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    console.log(data.ingredients);
  };

  return (
    <div className='App'>
      <Header />
      <Search />
      <div className='beers'>
        {beers.map(beer => (
          <Beer
            key={beer.id}
            name={beer.name}
            date={beer.first_brewed}
            desc={beer.description}
            malts={beer.ingredients.malt}
            hops={beer.ingredients.hops}
            yeast={beer.ingredients.yeast}
            img={beer.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
