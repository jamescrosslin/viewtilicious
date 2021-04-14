/* Component Imports */
import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Loading from "./components/Loading";
import SearchResults from "./components/SearchResults";
import NotFound from "./components/NotFound";
/* Dependency imports */
import axios from "axios";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
/* Secrets imports */
import apiKey from "./config.js";

function App() {
  // introducting topics declaritively is conducive to future modularity
  const topics = useMemo(() => ["Flowers", "Sloths", "Fruit"], []);

  /* the useState hook sets the navs state initial value to null;
    the navs state is used to store fetched data for preselected navs and to 
    cue the program that the data is ready for rendering gallery components */
  const [navs, setNavs] = useState(null);

  /**
   * @function makeTopicRoutes
   * @returns {Array} route component leading to either a gallery of photos or a loading animation if data is unavailable
   */
  function makeRoutes(values) {
    return values.map((topic, i) => (
      <Route key={`${i}`} path={`/${topic}`}>
        {navs ? <Gallery data={navs[topic]} /> : <Loading />}
      </Route>
    ));
  }

  /**
   * @function fetchPics
   * @param {String} tag a string of search terms
   * @returns array of photo data from Flickr
   */
  const fetchPics = useCallback(async (tag) => {
    // removes any non-digit or non-letter characters and replaces them with a + symbol
    tag = tag.replaceAll(/[^\w\d]/g, "+");

    // calls the flicker api and destructures the return
    const {
      data: {
        photos: { photo },
      },
    } = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
    );
    return photo;
  }, []);

  useEffect(
    () => {
      /**
       * @function getTopicData
       * @param {Array} topics
       * @description handles fetching data for all predetermined page topics and sets the nav state to contain the image data
       */
      async function getTopicData(topics) {
        //use Promise.all to take advantage of parallelism
        const results = await Promise.all(
          topics.map((topic) => fetchPics(topic))
        );
        //use reduce to create an object from our photo data, then set the nav state
        const navObj = topics.reduce((acc, topic, i) => {
          acc[topic] = results[i];
          return acc;
        }, {});
        setNavs(navObj);
      }

      getTopicData(topics);
    },
    // activates only on initial page load due to useMemo and useCallback on dependencies
    [topics, fetchPics]
  );

  return (
    <div className="container">
      <SearchBar />
      <Nav topics={topics} />
      <Switch>
        <Route exact path="/">
          <h2>Click around or search for images!</h2>
        </Route>
        {makeRoutes(topics)}
        {/* route parameter gives value of route to SearchResults */}
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
