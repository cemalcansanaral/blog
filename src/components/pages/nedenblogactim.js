import React, { Component } from "react"

class NedenBlogActim extends Component {
    render(){
        return(
            <div class="container pt-4">
            <div class="row">
                <div class="col-sm">
                    
                </div>
                <div class="col-sm-10">
                    <h2 style="text-align: center;">Neden Blog Açtım ?</h2>
                    <p style="font-size: 25px;">
                        Bu blog’u açmaktaki başlıca amaçlarım;
                            <ul>
                                <li style="font-size: 22px;">
                                    Siz değerli okuyuculara saygı ve sevgi çerçevesinde bilgili,yeni ve güncel paylaşımlarda bulunmak.
                                </li>
                                
                                <li class="pt-2" style="font-size: 22px;">
                                    Bilgisayar,donanım,yazılım,programlama,programlama dilleri,bilişim ve teknoloji alanlarını sizlere detaylı bir şekilde anlatmak ve geleceği sizlerle paylaşmak.
                                </li>

                                <li class="pt-2" style="font-size: 22px;">
                                    Siz değerli okuyucularımla sürekli etkileşim halinde kalmak ve aklınıza takılan, sizi düşünmekten iş yaptırmayan konular hakkında bilgi alışverişi sağlamamızı amaçlıyorum.
                                </li>
                                
                                <li class="pt-2" style="font-size: 22px;">
                                    Bu blog’u para kazanma amaçlı değilde daha çok bilgi paylaşımında bulunmak için açıyorum.
                                </li>
                            </ul>
                    </p>
                </div>
                <div class="col-sm">

                </div>
            </div>
        </div>

        // <!-- carousel -->
        <div class="carousel-inner container pt-4">
            <div class="carousel-item active">
            <img src="blog.jpg" style='height: 100%; width: 100%; object-fit: contain' class="d-block w-100" alt="...">
            </div>
        </div>
        {/* <!-- carouselEnd --> */}

        <div class="container pt-4">
            <div class="row">
                <div class="col-sm">
                    
                </div>
                <div class="col-sm-10">
                    <p style="font-size: 25px;">
                        Bu sayfanın günlük aktivitesi;
                            <ul>
                                <li style="font-size: 22px;">
                                    Hergün en az 1 bilgi verici blog yazısı paylaşmak.
                                </li>
                                
                                <li class="pt-2" style="font-size: 22px;">
                                    İletişim yoluyla sizden gelen şikayet,öneri ve soru mesajlarına gününde yanıt vermek.
                                </li>

                            </ul>
                    </p>
                </div>
                <div class="col-sm">

                </div>
            </div>
            {/* <!-- thanks --> */}
                <p style="font-size: 20px;">
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