import React from "react";

function Photo(props) {
  const { src, alt } = props;
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
}

export default Photo;
