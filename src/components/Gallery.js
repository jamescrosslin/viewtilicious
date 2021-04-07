import React from "react";
import Photo from "./Photo";

function Gallery(props) {
  const { data, loading } = props;
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {data?.length && !loading ? (
          data.map((pic) => <Photo key={pic.id} {...pic} />)
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
