import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import apiKey from "./config.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router";

function App() {
  const { pathname } = useLocation();

  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(null);

  function handleQuery(text) {
    setQuery(() => text);
  }

  async function handleFetch(tags) {
    const {
      data: {
        photos: { photo },
      },
    } = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
    );
    return photo;
  }

  useEffect(() => {
    async function fetchPics() {
      await setLoading(() => true);
      const searchTerms = query.split(/[^\w\d]/).join("+");
      const photo = await handleFetch(searchTerms);
      await setPhotos(() => photo);
      await setLoading(() => false);
    }

    const queryRegex = /^\/(.+)$/gi;
    const path = queryRegex.test(pathname)
      ? pathname.replace(queryRegex, "$1")
      : null;

    handleQuery(path);
    if (query) fetchPics();
  }, [query, pathname]);

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
