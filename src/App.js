import React from "react";
import SuperHeroState from "../src/context/state";
import User from "../src/component/User";
function App() {
  return (
    <SuperHeroState>
      <User />
    </SuperHeroState >
  );
}

export default App;
