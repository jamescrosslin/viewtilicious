import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import apiKey from "./config.js";
import axios from "axios";
import { useEffect, useState } from "react";

const mockData = [
  {
    url: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    alt: "1st image",
  },
  {
    url: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
    alt: "2nd image",
  },
];

function App() {
  const [photos, setPhotos] = useState(null);
  const [query, setQuery] = useState(["hello"]);

  useEffect(() => {
    async function fetchPics() {
      const searchTerms = query;
      const {
        data: {
          photos: { photo },
        },
      } = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerms}&tag_mode=all&per_page=24&format=json&nojsoncallback=1`
      );
      setPhotos(() => photo);
    }

    fetchPics(["hello"]);
  }, [query]);

  return (
    <div className="App">
      <SearchBar setQuery={setQuery} />
      <Nav />
      {photos ? <Gallery data={photos} /> : <span>Loading...</span>}
    </div>
  );
}

export default App;
