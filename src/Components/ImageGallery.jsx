import React from 'react';
import './ImageGallery.css';

const ImageGallery = (props) => {
  const { images, setImageDetail } = props;
  return (
    <div>
      {images.map((image) => {
        return (
          <span className="image-in-gallery">
            <img
              src={image.previewURL}
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
