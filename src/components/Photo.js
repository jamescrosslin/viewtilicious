import React from "react";

function Photo({ id, secret, server, title }) {
  return (
    <li>
      <img
        src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
      />
    </li>
  );
}

export default Photo;
