import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Carousel from "./components/carousel"
import Footer from "./components/footer"
import Cards from "./components/cards"
import Share from "./components/share"
import NedenBlogActim from "./pages/nedenblogactim"
import { BrowserRouter, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>

          <Switch>
            <Route exact path = "/nedenblogactim">
              <NedenBlogActim/>
            </Route>
          </Switch>

          <Carousel/>
          <Cards/>
          <Share/>
          <Footer/>
        </div>
      </BrowserRouter>
  )
}
}

export default App;
