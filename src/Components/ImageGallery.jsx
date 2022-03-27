import React from 'react';
import './ImageGallery.css';

const ImageGallery = (props) => {
  const { images, setImageDetail } = props;
  return (
    <div className="image-gallery">
      {images.map((image) => {
        return (
          <span className="image-in-gallery">
            <img
              src={image.largeImageURL}
              alt={`Search result with tags ${image.tags}`}
              onClick={() => setImageDetail(image)}
            />
          </span>
        );
      })}
    </div>
  );
};
export default ImageGallery;
