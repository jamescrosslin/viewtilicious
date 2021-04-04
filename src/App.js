import SearchBar from "./components/SearchBar";
import Nav from "./components/Nav";
import apiKey from "./config.js";

function App() {
  const fetchPics = (genre) => {};

  return (
    <div className="App">
      <SearchBar />
      <Nav />
    </div>
  );
}

export default App;
