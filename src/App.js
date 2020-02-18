import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CityContext from "./contexts/CityContext";

// components
import HomePage from "./pages/HomePage";

// style
import "./App.css";

function App() {
  const [cityOne, setCityOne] = useState({});
  const [cityTwo, setCityTwo] = useState({});

  return (
    <CityContext.Provider
      value={{ city1: [cityOne, setCityOne], city2: [cityTwo, setCityTwo] }}
    >
      <div className="App">
        <Router>
          <Route path="/" component={HomePage} />
        </Router>
      </div>
    </CityContext.Provider>
  );
}

export default App;
