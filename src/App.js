import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CityProvider } from "./contexts/CityContext";

// components
import HomePage from "./pages/HomePage";

// style
import "./App.css";

function App() {
  return (
    <CityProvider>
      <div className="App">
        <Router>
          <Route path="/" component={HomePage} />
        </Router>
      </div>
    </CityProvider>
  );
}

export default App;
