import React, { useContext } from "react";
import { CountryList } from "../component/CountryList";
import { SuperContext } from "../context/context";

function Home() {
  const context = useContext(SuperContext);
  return (
    <div
      className=""
      style={{
        background: !context.darkclick
          ? "hsl(207, 26%, 17%)"
          : "hsl(0, 0%, 98%)",
      }}
    >
      <CountryList />
    </div>
  );
}

export default Home;
