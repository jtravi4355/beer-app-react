import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./componenets/UI/Header";
import Search from "./componenets/UI/Search";
import Footer from "./componenets/UI/Footer";
import BeerList from "./componenets/Beer/BeerList";
import BeerInfo from "./componenets/Beer/BeerInfo";

function App() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers?abv_gt=${query}`
      );
      const data = await res.json();

      setBeers(data);
    };

    fetchItems();
  }, [query]);

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='content'>
          <Route path='/' exact>
            <Search getQuery={q => setQuery(q)} query={query} />
            <BeerList beers={beers} />
          </Route>

          <Route path='/beer/:id' exact component={BeerInfo} />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
