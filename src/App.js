import "./index.css";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import ImageShow from "./components/ImageShow";

function App() {

  const handleSubmit = (term) => {
    searchImages(term);
  }

  return (
    <main>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList />
    </main>
  );
}

export default App;
