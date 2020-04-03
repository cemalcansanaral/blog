import React, { Component } from "react"

class Hakkimda extends Component {
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
                <div className = "container">
                <h1 className = "mt-4" style = {{textAlign: "center"}}>Hakkımda</h1>
                <p style={{fontSize: "30px"}}>1999 Hatay / İskenderun doğumluyum. Şuan Aksaray Üniversitesinde Yönetim Bilişim Sistemleri bölümü öğrencisiyim. Tüm sorularınız,şikayet ve önerileriniz için bana telegramdan mesaj atabilirsiniz. 🙂</p>
                <hr></hr>
                </div>
            </div>
        )
    }
}

export default Hakkimda