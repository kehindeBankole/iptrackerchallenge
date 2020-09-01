import React from "react";
import SuperHeroState from "../src/context/state";
import Home from "./pages/Home";
function App() {
  return (
    <SuperHeroState>
     <Home />
    </SuperHeroState >
  );
}

export default App;
