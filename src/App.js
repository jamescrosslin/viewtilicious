import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import apiKey from "./config.js";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResults from "./components/SearchResults";

function App() {
  const [topics, setTopics] = useState(["Flowers", "Babies", "Fruit"]);

  const [navs, setNavs] = useState(null);

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
    <BrowserRouter>
      <div className="container">
        <SearchBar />
        <Nav topics={topics} />
        <Switch>
          <Route exact path="/">
            <h2>Click around or search!</h2>
          </Route>
          {topics.map((topic, i) => (
            <Route key={`${i}`} path={`/${topic}`}>
              {navs ? <Gallery data={navs[topic]} /> : <Loading />}
            </Route>
          ))}
          {/* <Route path="/flowers">
            <Gallery data={navs.flowers} />
          </Route>
          <Route path="/babies">
            <Gallery data={navs.babies} />
          </Route>
          <Route path="/fruit">
            <Gallery data={navs.fruit} />
          </Route> */}

          <Route path="/search/:query">
            {/* maybe have routes in children of gallery, jumping come from failure to render photo-container, or put a photo-container div around the home route */}

            <SearchResults fetchPics={fetchPics} />
          </Route>
          <Route>
            <div>
              Oops, you went too hard in the URL and found out that route does
              not exist. Click one of the wonderful preselected topics or type a
              search into the bar to get some sweet images of INSERT TOPIC HERE.
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
