import React, { Component } from "react"

class BilgisayarNedir extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className = "container mt-4">
                {/* carousel */}
                <div class="carousel-inner container">
                    <div class="carousel-item active">
                    <img src="https://i.hizliresim.com/eSWPQZ.jpg" style={{height: "%100", width: "%100", objectFit: "contain"}} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                {/* carouselEnd */}

                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm-11 mt-2">
                        <h1 className="mt-4" style = {{textAlign: "center"}}>Bilgisayar Nedir ?</h1>
                        <p className = "mt-4" style = {{fontSize: "25px"}}>
                        Günümüzde yaygınlaşmış olan bilgisayarlar her evde en az bir veya birden fazla bilgisayar bulunuyor. 
                        Bu bilgisayarları hepimiz kullanıyoruz ve işlevlerini az çok da olsa biliyoruz. 
                        Bildiğinizden daha fazlasını öğrenmek istemez misiniz ?
                        </p>
                    </div>

                    
                    <div class="col-sm">

                    </div>
                </div>


                {/* carousel */}
                <div class="carousel-inner container mt-4">
                    <div class="carousel-item active">
                    <img src="https://i.hizliresim.com/hw2LCh.jpg" style={{height: "%100", width: "%100", objectFit: "contain"}} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                {/* carouselEnd */}

                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm-11 mt-2">
                        <p className = "pt-4" style = {{fontSize: "25px"}}> Haydi Başlayalım 🙂</p>
                        <p className = "pt-4" style = {{fontSize: "25px"}}>
                        Bilgisayar kullanıcıdan aldığı verilerle mantıksal ve aritmetiksel işlemler yapan elektronik bir makinedir. Bilgisayarlar yaptıkları işlemleri çok hızlı ve hatasız olarak yerine getirirler. Bu işlemlerin sonucunu saklayabilir ve ihtiyaç duyulduğunda sakladığı bilgileri yeniden kullanıcının önüne getirip görüntüleyebilir. Bütün bu işlemlerin yapılabilmesi için bilgisayarlara veriler girilir. Girilen bu veriler işlenir çıktıları alınır dilenirse bu çıktılar görüntülenebilir veya depolanabilir. İhtiyaç halinde depolandığı ortamdan getirilerek yeniden elde edilebilir.
                        </p>
                        <p className = "pt-4" style = {{fontSize: "25px"}}>
                        Bilgisayardaki elektronik parçaların tamamına “Donanım”, bilgisayar alırken kurulu gelen windows olsun yada daha sonra isteğe bağlı indirip kurduğumuz programlara ise “Yazılım” diyoruz.
                        </p>
                        <p className = "pt-4" style = {{fontSize: "25px"}}>
                        Bilgisayarlar <b>“Temel Birimler”</b> adını verdiğimiz 4 ana birimden oluşur.
                        </p>
                        <h2 style = {{fontSize: "35px"}} className="mt-4">Temel Birimler</h2>
                        <ul>
                            <li style={{fontSize: "22px"}}>Sistem Birimi (Kasa)</li>
                            <li style={{fontSize: "22px"}}>Monitör (Ekran)</li>
                            <li style={{fontSize: "22px"}}>Klavye</li>
                            <li style={{fontSize: "22px"}}>Mouse (Fare)</li>
                        </ul>

                        {/* carousel */}
                        <div class="carousel-inner container mt-4">
                            <div class="carousel-item active">
                            <img src="https://i.hizliresim.com/Uty7nx.jpg" style={{height: "%100", width: "%100", objectFit: "contain"}} class="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        {/* carouselEnd */}

                        <p className = "pt-4" style = {{fontSize: "25px"}}>
                        Bilgisayarın donanımlarına bakacak olursak iki gruba ayrılarak inceleniyor. Bunlar;
                        </p>

                        <ul>
                            <li style={{fontSize: "22px"}}>İç Donanım</li>
                            <li style={{fontSize: "22px"}}>Dış Donanım</li>
                        </ul>

                        

                        <div className="row">
                            <div className="col-sm-9">
                            <p className = "pt-4" style = {{fontSize: "25px"}}>
                            İç donanım sistem birimi (Kasa)nın içerisinde yerleşik bulunan parçalar (Anakart, işlemci, ram, ekran kartı) bütünüdür.
                            </p>
                                
                            </div>
                            <div className="col-sm-3">
                            {/* carousel */}
                            <div class="carousel-inner container mt-4">
                                    <div class="carousel-item active">
                                    <img src="https://i.hizliresim.com/ZYZCVp.jpg" style={{height: "100px", width: "100px", objectFit: "contain", padding: "5px"}} class="d-block w-100" alt="..."></img>
                                    </div>
                                </div>
                                {/* carouselEnd */}
                            </div>
                        </div>
                        <p className = "pt-4" style = {{fontSize: "25px"}}>
                        Dış Donanım, dış ortamda bulunan (klavye, mouse, yazıcı, monitör vb) parçalardan oluşur.
                        {/* <!-- thanks --> */}
                        <p className = "mt-4" style={{fontSize: "20px"}}>
                                    Yazımı Okuduğunuz İçin Teşekkür Ederim. 🙂
                                </p>
                                {/* <!-- thanksEnd --> */}
                        </p>
                    </div>
                    <div class="col-sm">

                    </div>
                </div>
            </div>
        )
    }
}

export default BilgisayarNedir