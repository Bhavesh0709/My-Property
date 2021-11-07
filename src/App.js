import React from "react";
import "./App.css";
import "./side_navbar.css";
import WebForm from "./Pages/WebForm";
import Home from "./Pages/Home";
import Navbar from "./inc/Navbar";
import Contact from "./Pages/Contact";
import About from "../src/Pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/inc/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Property from "./Pages/Property";
import Personal from "./Pages/Personal";
import Listing from "./Pages/Listing";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>

          <Route path="/WebForm">
            <WebForm />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Footer">
            <Footer />
          </Route>

          <Route path="/Listing">
            <Listing />
          </Route>

          <Route path="/Personal">
            <Personal />
          </Route>

          <Route path="/Property">
            <Property />
          </Route>
         
        </Switch>
        
       
      </div>
    </Router>
      
    
  );
}

export default App;
