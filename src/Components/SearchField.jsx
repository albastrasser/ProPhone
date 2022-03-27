import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (searchValue.length) {
      const apiKey = process.env.REACT_APP_API_KEY;
      const getImages = async () => {
        try {
          const apiResponse = await axios.get(
            `https://pixabay.com/api/?key=${apiKey}&q=${searchValue}&image_type=photo`
          );
          console.log(apiResponse.data, 'data');
        } catch (error) {
          console.log(error, 'There was a problem getting images from Pixabay');
        }
      };
      getImages();
    }
  }, [searchValue]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchField;
