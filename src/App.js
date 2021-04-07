import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import apiKey from "./config.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router";

function App() {
  const [topics] = useState(["Cats", "Dogs", "Waterslides"]);
  const { pathname } = useLocation();
  const queryRegex = /^\/(.+)$/gi;
  const path = queryRegex.test(pathname)
    ? pathname.replace(queryRegex, "$1")
    : null;

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(path);
  const [navs, setNavs] = useState({});

  function handleQuery(text) {
    setQuery(() => text);
  }

  async function fetchPics(tags) {
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
    async function handleFetch() {
      await setLoading(() => true);
      const searchTerms = query.split(/[^\w\d]/).join("+");
      const photo = await fetchPics(searchTerms);
      await setPhotos(() => photo);
      await setLoading(() => false);
    }

    if (query) handleFetch();
  }, [query]);

  useEffect(() => {
    async function getTopics(topics) {
      const navObj = {};
      for (const topic of topics) {
        const results = await fetchPics(topic);
        navObj[topic] = results;
      }
      setNavs(navObj);
    }
    getTopics(topics);
  }, [topics]);

  return (
    <div className="container">
      <SearchBar makeQuery={handleQuery} />
      <Nav topics={topics} />
      <Switch>
        <Route exact path="/" />
        <Route path={[...Object.keys(navs)].map((word) => "/" + word)}>
          <Gallery data={navs[path]} loading={false} />
        </Route>

        <Route path="/search/:query">
          {/* maybe have routes in children of gallery, jumping come from failure to render photo-container, or put a photo-container div around the home route */}
          <Gallery data={photos} loading={loading} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
