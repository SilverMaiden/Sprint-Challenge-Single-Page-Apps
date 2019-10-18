import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
          setCharacters(response.data.results);
      })
  }, []);

  return (
      <div>
        <section className="character-list">
          <h2>Character Search</h2>

        <SearchForm characters={characters} />
        </section>
      </div>

  );
}
