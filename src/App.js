import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import apiKey from "./config.js";

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
  const fetchPics = (genre) => {};

  return (
    <div className="App">
      <SearchBar />
      <Nav />
      <Gallery data={""} />
    </div>
  );
}

export default App;
