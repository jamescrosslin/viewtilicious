import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import apiKey from "./config.js";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import NotFound from "./components/NotFound";

function App() {
  const [topics, setTopics] = useState();

  const [navs, setNavs] = useState(null);

  const fetchPics = useCallback(async (tag) => {
    tag = tag.split(/[^\w\d]/).join("+");
    const {
      data: {
        photos: { photo },
      },
    } = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
    );
    return photo;
  }, []);

  function handleSetTopics(newTopics) {
    window.localStorage.setItem("topics", JSON.stringify(newTopics));
    setTopics(() => newTopics);
  }

  useEffect(() => {
    if (window.localStorage.topics) {
      const savedTopics = window.localStorage.getItem("topics");
      return setTopics(() => JSON.parse(savedTopics));
    }
    setTopics(() => ["Flowers", "Sloths", "Fruit"]);
  }, []);

  useEffect(() => {
    async function getTopics(topics) {
      const navObj = {};
      for (const topic of topics) {
        const results = await fetchPics(topic);
        navObj[topic] = results;
      }

      setNavs(navObj);
    }

    if (topics) getTopics(topics);
  }, [topics, fetchPics]);

  return (
    <div className="container">
      <SearchBar />
      {topics && <Nav topics={topics} changeTopics={handleSetTopics} />}
      <Switch>
        <Route exact path="/">
          <h2>Click around or search!</h2>
        </Route>
        {topics &&
          topics.map((topic, i) => (
            <Route key={`${i}`} path={`/${topic}`}>
              {navs ? <Gallery data={navs[topic]} /> : <Loading />}
            </Route>
          ))}

        <Route path="/search/:query">
          <SearchResults fetchPics={fetchPics} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
