import React, { Component } from "react"
import { render } from "@testing-library/react"
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
            <img src="https://www.freelogoservices.com/api/main/images/1j+ojl1FOMkX9WypfBe43D6kifaAqx5PmB...IwXs1M3EMoAJtlSgohvRs8vk7" width = "70" alt=""/>
            </Link>
            <Link class="navbar-brand pl-2" to="/">Cemal Can Şanaral</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link class="nav-item nav-link active" to="/">Anasayfa <span class="sr-only">(current)</span></Link>
                <Link class="nav-item nav-link" to="/hakkimda">Hakkımda</Link>
                <Link class="nav-item nav-link" to="/">İletişim</Link>
                </div>
            </div>
            <div className = "d-none d-sm-block">
                <p class="pr-3 pt-2 float-left"><b>BENİ TAKİP EDİN </b></p>
                <a href="https://www.instagram.com/cemalcansanaral/?hl=tr" target="blank" class="pr-2">
                    <img src="https://i.hizliresim.com/H2CjMh.png" width="40" alt=""/>
                </a>
                <a href="https://twitter.com/CSanaral" target="blank" className="pr-2">
                    <img src="https://i.hizliresim.com/56ck9f.png" width="35" alt=""/>
                </a>
            </div>
            </nav>
        )
    }
}

export default Navbar