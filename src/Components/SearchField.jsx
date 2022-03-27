import React, { useState } from 'react';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        value={searchValue}
        onChange={setSearchValue}
      />
    </div>
  );
};

export default SearchField;
