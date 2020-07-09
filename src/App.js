import React, { useEffect, useState } from "react";

import Header from "./componenets/UI/Header";
import Search from "./componenets/UI/Search";
import Footer from "./componenets/UI/Footer";
import BeerList from "./componenets/Beer/BeerList";

function App() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers?abv_gt=${query}`
      );
      const data = await res.json();
      console.log(data);
      setBeers(data);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='App'>
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <h1 className='search-query'>Beers with an ABV greater than {query}</h1>
      <BeerList beers={beers} />
      <Footer />
    </div>
  );
}

export default App;
