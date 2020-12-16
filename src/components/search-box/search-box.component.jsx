import React from 'react';
import './search-box.styles.css';

const SearchBox = (propsData) => {
  const { placeholder, handleChange } = propsData;
  return (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

export default SearchBox;
