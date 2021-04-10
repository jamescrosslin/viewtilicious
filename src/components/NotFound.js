import React from "react";
import notfound from "../img/404.gif";

function NotFound(props) {
  const { prop } = props;
  return (
    <figure>
      <img src={notfound} alt="A woman sitting on top of 404 block letters" />
      <figcaption>
        <a
          href="http://storyset.com/web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Illustration by Freepik Storyset
        </a>
      </figcaption>
    </figure>
  );
}

export default NotFound;
