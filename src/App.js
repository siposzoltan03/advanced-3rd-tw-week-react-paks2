import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import HomePage from "./pages/HomePage";

// style
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
