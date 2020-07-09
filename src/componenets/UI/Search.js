import React, { useEffect, useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = q => {
    setText(q);
  };

  const submitChange = e => {
    e.preventDefault();
    getQuery(text);
    setText("");
  };

  return (
    <div className='search'>
      <form className='search-form'>
        <input
          className='search-input'
          type='number'
          placeholder='Search for beers with a mininum ABV..'
          value={text}
          onChange={e => onChange(e.target.value)}
        />
        <button
          className='search-btn'
          type='submit'
          onClick={e => submitChange(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
