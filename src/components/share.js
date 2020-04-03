import React, { Component } from "react"

class Share extends Component {
    render(){
        return(
            <div class="container pb-2" style = {{textAlign: "center"}}>
            <hr></hr>
            <h3>Blog'u Paylaş Bana Destek Ol.</h3>
            <div id="share-buttons">

                {/* <!-- Facebook --> */}
                <a href="http://www.facebook.com/sharer.php?u=https://cemalcansanaral.github.io/blog" target="_blank">
                <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                </a>
                
                {/* <!-- Email --> */}
                <a href="mailto:?Subject=Simple Share Buttons&amp;Body=https://cemalcansanaral.github.io/blog">
                    <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" />
                </a>
                
                {/* <!-- LinkedIn --> */}
                <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://cemalcansanaral.github.io/blog" target="_blank">
                    <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn" />
                </a>
                
                {/* <!-- Twitter --> */}
                <a href="https://twitter.com/share?url=https://cemalcansanaral.github.io/blog" target="_blank">
                    <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                </a>
            
            </div>
            </div>
        )
    }
}

export default Share