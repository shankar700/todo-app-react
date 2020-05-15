import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/tasks-home/Home";
import History from "./components/tasks-history/History";
import Dashboard from "./components/tasks-dashboard/Dashboard";
import Navbar from "./components/Navbar";
import "./Main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/history" exact component={History} />
      </Router>
    </div>
  );
}

export default App;
