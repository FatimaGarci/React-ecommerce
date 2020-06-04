import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header className="navbar">
          <nav>
            <img className="logo" src="../img/Rg.png" alt="logo" />
            <ul className="nav-links">
              <li>
                {" "}
                <Link to="/"> Home </Link>
              </li>
              <li>
                {" "}
                <Link to="/products"> Products </Link>
              </li>
              <li>
                {" "}
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>{" "}
            <div className="burger">
              <div className="line1"> </div> <div className="line2"> </div>{" "}
              <div className="line3"> </div>{" "}
            </div>{" "}
          </nav>{" "}
        </header>{" "}
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>{" "}
          <Route path="/products">
            {" "} 
            <Filter />
            {" "}
          </Route>{" "}
          <Route path="/contact">
            {" "}
            <Contact />{" "}
          </Route>{" "}
        </Switch>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
}

export default App;
