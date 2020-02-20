import React from "react";

import SearchBar from "../components/SearchBar";
import Map from "../components/Map";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <div className="HomePage">
      <SearchBar />
      <div className="container">
        <SideBar />
        <Map />
      </div>
    </div>
  );
}

export default HomePage;
