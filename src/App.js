import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import apiKey from "./config.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { matchPath, Route, Switch, useLocation } from "react-router";

function App() {
  const { pathname } = useLocation();
  const queryRegex = /^\/(.+)$/gi;
  const path = queryRegex.test(pathname)
    ? pathname.replace(queryRegex, "$1")
    : null;

  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(path);

  function handleQuery(text) {
    setQuery(() => text);
  }

  useEffect(() => {
    async function fetchPics() {
      await setLoading(() => true);
      const searchTerms = query.split(/[^\w\d]/).join("+");
      const {
        data: {
          photos: { photo },
        },
      } = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerms}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
      );
      await setPhotos(() => photo);
      await setLoading(() => false);
    }

    if (query) fetchPics();
  }, [query]);

  return (
    <div className="container">
      <SearchBar makeQuery={handleQuery} />
      <Nav />
      <Switch>
        <Route exact path="/" />
        <Route path="/:query">
          {loading ? <Loading /> : <Gallery data={photos} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
