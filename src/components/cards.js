import React, { Component } from "react"
import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"

class Cards extends Component {
    render(){
        return(
            <div class="container">
            <div class="row">
            <div class="col-sm">
                <Link to="/nedenblogactim" style={{color: "black"}}>
                <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                    {/* <img src="https://i.hizliresim.com/JmbItj.jpg" class="card-img" alt="..."> */}
                    <img src="https://i.hizliresim.com/JmbItj.jpg" class="card-img" alt="..."></img>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Neden Blog Açtım ?</h5>
                        <p class="card-text">Bu blog’u açmaktaki başlıca amaçlarım;</p>
                        <p class="card-text"><small class="text-muted">25.03.2020 tarihinde yayınlandı.</small></p>
                    </div>
                    </div>
                </div>
                </div>
                </Link>
            </div>
            </div>
            <hr/>
            </div>
        )
    }
}

export default Cards