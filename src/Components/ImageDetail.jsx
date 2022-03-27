import React from 'react';
import './ImageDetail.css';

export const ImageDetail = (props) => {
  const { image, setImageDetail } = props;
  return (
    <div className="modal">
      <div className="centered">
        <div className="image-detail-modal">
          <img
            src={image.largeImageURL}
            alt={`Enlarged view with the tags ${image.tags}`}
          />
          <div className="modal-text-section">
            <div>{image.tags}</div>
            <div>by: {image.user}</div>
          </div>
          <button className="modal-button" onClick={() => setImageDetail(null)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
