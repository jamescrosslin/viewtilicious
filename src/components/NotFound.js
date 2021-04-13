import React from "react";
import notfound from "../img/404.gif";

function NotFound() {
  return (
    <div>
      <h3>
        Sorry, we can't find that page. Try the search bar or the preselected
        topics!
      </h3>
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
    </div>
  );
}

export default NotFound;
