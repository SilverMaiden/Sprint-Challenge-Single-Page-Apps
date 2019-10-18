import React, { useState, useEffect } from "react";
import { Search } from "rendition";

import CharacterCard from "./CharacterCard";
export default function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const [searchResults, setSearchResults] = useState([]);
    console.log(props.characters);

    useEffect(() => {
        const results = props.characters.filter(characterObj =>
            characterObj.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }



  return (
    <section className="search-form">

        <Search
            type="text"
            name="textfield"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
        />
        <div>
                {searchResults.map(character => (
                  <CharacterCard character={character} />
                ))}
        </div>
    </section>
  );
}
