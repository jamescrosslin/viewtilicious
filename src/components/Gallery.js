import React from "react";
import Photo from "./Photo";

function Gallery(props) {
  const { data } = props;
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {data?.length ? (
          data.map((pic) => <Photo src={pic.url} alt={pic.desc} />)
        ) : (
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Gallery;
