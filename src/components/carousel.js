import React, { Component } from "react"

class Carousel extends Component {
    render(){
        return(
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {/* <img src="blog3.jpg" class="d-block w-100" alt="..."> */}
                    <img src="https://i.hizliresim.com/WIGpty.jpg" className = "d-block w-100" alt="..."/>
                </div>
            </div>
            <hr/>
            </div>
        )
    }

}

export default Carousel