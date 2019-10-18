import React from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import Nav from './components/Nav';
import { Button, Box, Provider } from 'rendition';


export default function App() {
  return (
    <Provider>
        <Nav />
        <main>
            <Route exact path="/">
              <Header />
            </Route>

            <Route path="/welcome-page/" >
              <WelcomePage />
            </Route>

            <Route path="/character-list/" >
              <CharacterList />
            </Route>
        </main>
    </Provider>
  );
}
