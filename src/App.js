import React from "react";
import "./App.css";
import WebForm from "./Pages/WebForm";
import Home from "./Pages/Home";
import Navbar from "./inc/Navbar";
import Contact from "./Pages/Contact";
import About from "../src/Pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/inc/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";



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
         
        </Switch>
        
       
      </div>
    </Router>
      
    
  );
}

export default App;
