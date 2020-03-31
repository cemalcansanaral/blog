import React, { Component } from "react"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Carousel from "./components/carousel"
import Footer from "./components/footer"
import Cards from "./components/cards"
import Share from "./components/share"
import { Helmet } from "react-helmet"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Cemal Can Şanaral</title>
        </Helmet>
        <Navbar/>
        <Carousel/>
        <Cards/>
        <Share/>
        <Footer/>
      </div>
  )
}
}

export default App;
