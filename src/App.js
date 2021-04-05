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
  const [photos, setPhotos] = useState([]);

  async function fetchPics(searchTerms) {
    searchTerms = searchTerms.join(",").replaceAll(/\W/gi, ",");
    const {
      data: {
        photos: { photo },
      },
    } = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerms}&per_page=24&format=json&nojsoncallback=1`
    );

    return photo;
  }

  useEffect(() => {
    const photos = fetchPics(["hello"]);
    setPhotos(() => photos);
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <Nav />
      <Gallery data={photos} />
    </div>
  );
}

export default App;
