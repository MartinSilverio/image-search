import React from 'react';

import './SearchInput.scss';

function SearchInput({ onSubmit, onChange, value }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className='search-input-container'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search for images'
          type='text'
          className='search-input'
          value={value}
          onChange={onChange}
        />
        <button className='search-button'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
