import React, { useState } from "react";
import "./styles.css";

const DictionaryApp = () => {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const result = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase(),
    );
    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="dictionary-app">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a word"
        data-cy="search-input"
      />
      <button onClick={handleSearch} data-cy="search-button">
        Search
      </button>
      <div className="definition" data-cy="definition">
        <strong>Definition:</strong> {definition}
      </div>
    </div>
  );
};

export default DictionaryApp;
