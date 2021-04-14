import React from "react";
import Photo from "./Photo";

function Gallery({ data, children }) {
  /**
   * @function makePhotos
   * @param {Array} photoData
   * @returns {Array} photo components with individual photo data
   */
  function makePhotos(photoData) {
    return photoData.map((pic, i, arr) => (
      <Photo
        // delays the entry of components based on index so that a 4-column grid in order from rightmost column to leftmost
        // in different views with less columns creates a cool checkerboard entrance
        delay={(4 - (i % 4)) / 10}
        key={pic.id}
        {...pic}
      />
    ));
  }
  return (
    <div className="photo-container">
      {children}
      <ul>
        {
          // runs makePhotos only when valid data is passed
          data?.length ? (
            makePhotos(data)
          ) : (
            //if data was searched but has no contents, renders results NoResults component
            <li className="not-found">
              <h3>No Results Found</h3>
              <p>Your search did not return any results. Please try again.</p>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default Gallery;
