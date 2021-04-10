import React from "react";

function Photo({ delay, id, secret, server, title }) {
  return (
    <li style={{ animationDelay: `${delay}s` }}>
      <img
        src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
      />
    </li>
  );
}

export default Photo;
