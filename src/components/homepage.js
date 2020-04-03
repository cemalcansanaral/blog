import React, { Component } from "react"
import { Link } from "react-router-dom";

class HomePage extends Component {
    render(){
        return(
            <div>
                {/* carousel */}
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.hizliresim.com/WIGpty.jpg" class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <hr></hr>
                <div className = "container">
                <hr></hr>
                </div>
                </div>
                {/* carouselEnd */}

                {/* cards1 */}
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
                
                </div>
                {/* cards1End */}

                {/* cards2 */}
                
                {/* cards2End */}
            </div>
            
        )
    }
}

export default HomePage