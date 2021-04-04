import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import apiKey from "./config.js";

function App() {
  const fetchPics = (genre) => {};

  return (
    <div className="App">
      <SearchBar />
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
