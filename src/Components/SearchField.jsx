import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery';
import ImageDetail from './ImageDetail';
import Header from './Header';
import { BsSearch } from 'react-icons/bs';
import './SearchField.css';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [imageDetail, setImageDetail] = useState(null);
  const isModalOpen = imageDetail ? true : false;

  useEffect(() => {
    if (searchValue.length) {
      const apiKey = process.env.REACT_APP_API_KEY;
      const getImages = async () => {
        try {
          const apiResponse = await axios.get(
            `https://pixabay.com/api/?key=${apiKey}&q=${searchValue}&image_type=photo`
          );
          setImages(apiResponse.data.hits);
        } catch (error) {
          console.log(error, 'There was a problem getting images from Pixabay');
        }
      };
      getImages();
    } else setImages([]);
  }, [searchValue]);

  const renderImageGallery = () => {
    if (images.length) {
      return <ImageGallery images={images} setImageDetail={setImageDetail} />;
    }
  };

  return (
    <div>
      <Header />
      <div className="search">
        <span className="icon">
          <BsSearch />
        </span>
        <input
          className="main-page-search"
          type="search"
          placeholder="Search here"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {renderImageGallery()}
      {isModalOpen && (
        <ImageDetail image={imageDetail} setImageDetail={setImageDetail} />
      )}
    </div>
  );
};

export default SearchField;
