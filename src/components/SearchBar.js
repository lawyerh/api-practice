import { useState } from "react";

function SearchBar({ onSubmit }) {
  // Creating the state for the user search term
  const [term, setTerm] = useState("");

  // When a user hits the enter key, we block the browsers default submission behavior and instead make an api call with the term state
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  // Every time the user changes the input, we set the change to term state
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
