import React from 'react';

export const ImageDetail = (props) => {
  const { image, setImageDetail } = props;
  return (
    <div>
      <img
        src={image.largeImageURL}
        alt={`Enlarged view with the tags ${image.tags}`}
      />
      <h2>{image.tags}</h2>
      <h3>by: {image.user}</h3>
      <button onClick={() => setImageDetail(null)}>Close</button>
    </div>
  );
};

export default ImageDetail;
