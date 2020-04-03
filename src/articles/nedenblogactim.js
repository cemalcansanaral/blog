import React, { Component } from "react"

class NedenBlogActim extends Component {
    render(){
        return(
            <div className = "container pt-4">
                
                {/* carousel */}
                <div class="carousel-inner container">
                    <div class="carousel-item active">
                    <img src="https://i.hizliresim.com/AkjOox.jpg" style={{height: "%100", width: "%100", objectFit: "contain"}} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                {/* carouselEnd */}


                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm-10 mt-2">
                        <h2 style = {{textAlign: "center"}}> Neden Blog Açtım ? </h2>
                        <p className = "mt-2" style = {{fontSize: "25px"}}>
                            Bu blog’u açmaktaki başlıca amaçlarım;
                                <ul>
                                    <li className = "pt-2" style = {{fontSize: "22px"}}>
                                    Siz değerli okuyuculara saygı ve sevgi çerçevesinde bilgili,yeni ve güncel paylaşımlarda bulunmak.
                                    </li>

                                    <li class="pt-2" style={{fontSize: "22px"}}>
                                    Bilgisayar,donanım,yazılım,programlama,programlama dilleri,bilişim ve teknoloji alanlarını sizlere detaylı bir şekilde anlatmak ve geleceği sizlerle paylaşmak.
                                    </li>

                                    <li class="pt-2" style={{fontSize: "22px"}}>
                                    Siz değerli okuyucularımla sürekli etkileşim halinde kalmak ve aklınıza takılan, sizi düşünmekten iş yaptırmayan konular hakkında bilgi alışverişi sağlamamızı amaçlıyorum.
                                    </li>
                                
                                    <li class="pt-2" style={{fontSize: "22px"}}>
                                        Bu blog’u para kazanma amaçlı değilde daha çok bilgi paylaşımında bulunmak için açıyorum.
                                    </li>

                                </ul>
                        </p>
                    </div>
                    <div class="col-sm">

                    </div>
                </div>

                {/* carousel */}
                <div class="carousel-inner container mt-4">
                    <div class="carousel-item active">
                    <img src="https://i.hizliresim.com/KfT6h8.jpg" style={{height: "%100", width: "%100", objectFit: "contain"}} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                {/* carouselEnd */}
                
                <div class="container pt-4">
                <div class="row">
                    <div class="col-sm">
                        
                    </div>
                    <div class="col-sm-10">
                        <p style={{fontSize: "25px"}}>
                            Bu sayfanın günlük aktivitesi;
                                <ul>
                                    <li style={{fontSize: "22px"}}>
                                        Hergün en az 1 bilgi verici blog yazısı paylaşmak.
                                    </li>
                                    
                                    <li class="pt-2" style={{fontSize: "22px"}}>
                                        İletişim yoluyla sizden gelen şikayet,öneri ve soru mesajlarına gününde yanıt vermek.
                                    </li>

                                </ul>
                        </p>
                    </div>
                    <div class="col-sm">

                    </div>
                </div>
                {/* <!-- thanks --> */}
                    <p style={{fontSize: "20px"}}>
                        Yazımı Okuduğunuz İçin Teşekkür Ederim.
                    </p>
                {/* <!-- thanksEnd --> */}
            </div>

            {/* <!-- textEnd --> */}
            </div>
        )
    }
}

export default NedenBlogActim