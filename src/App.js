import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import HomePage from "./components/homepage"
import Footer from "./components/footer"
import NedenBlogActim from "./articles/nedenblogactim"
import Hakkimda from "./articles/hakkimda"
import Share from "./components/share"
import BilgisayarNedir from "./articles/bilgisayarnedir"

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
      return(
        <BrowserRouter>
          <div>
            <Navbar/>

                <Switch>

                  <Route exact path = "/blog">
                    <HomePage/>
                  </Route>

                  <Route exact path = "/nedenblogactim">
                    <NedenBlogActim/>
                  </Route>

                  <Route exact path = "/bilgisayarnedir">
                    <BilgisayarNedir/>
                  </Route>

                  <Route exact path = "/hakkimda">
                    <Hakkimda/>
                  </Route>
                </Switch>
                <Share/>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
