import React, { Component } from "react"

class Footer extends Component {
    render(){
        return(
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
            <div className="col-12 col-md">
                {/* <img className="mb-2" src="https://www.freelogoservices.com/api/main/images/1j+ojl1FOMkX9WypfBe43D6kifaAqx5PmB...IwXs1M3EMoAJtlSgohvRs8vk7" alt="" width="24" height="24"> */}
                <img className="mb-2" src="https://www.freelogoservices.com/api/main/images/1j+ojl1FOMkX9WypfBe43D6kifaAqx5PmB...IwXs1M3EMoAJtlSgohvRs8vk7" alt="" width="70"></img>
                <small className="d-block mb-3 text-muted">© 2020</small>
            </div>
            <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Cool stuff</a></li>
                <li><a className="text-muted" href="#">Random feature</a></li>
                <li><a className="text-muted" href="#">Team feature</a></li>
                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                <li><a className="text-muted" href="#">Another one</a></li>
                <li><a className="text-muted" href="#">Last time</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Resource</a></li>
                <li><a className="text-muted" href="#">Resource name</a></li>
                <li><a className="text-muted" href="#">Another resource</a></li>
                <li><a className="text-muted" href="#">Final resource</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Locations</a></li>
                <li><a className="text-muted" href="#">Privacy</a></li>
                <li><a className="text-muted" href="#">Terms</a></li>
                </ul>
            </div>
            </div>
        </footer>
        )
    }
}

export default Footer