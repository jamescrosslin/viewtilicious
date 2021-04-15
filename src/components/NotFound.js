import React from "react";
import notfound from "../img/404.gif";

function NotFound() {
  return (
    <div>
      <h3>
        Sorry, we can't find that page. Try the search bar or the pre-selected
        topics!
      </h3>
      <figure>
        <img
          src={notfound}
          alt="A broken robot with error on its screen and large floating 404 numbers."
        />
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
    </div>
  );
}

export default NotFound;
