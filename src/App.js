import './App.css';

function App() {
  const shareImage = async() => {
    //https://consappsrvr.irevo.in/images/store_setup/welcome_banner_delivery.png


    fetch("https://consappsrvr.irevo.in/images/store_setup/welcome_banner_delivery.png")
  .then(response => response.blob())
      .then(blob => {
    
                        const file = new File([blob], 'fileName.png', { type: blob.type });

        try {
                     navigator.share({
                        title: "iRevo App Simulator",
                        text: 'Check out iRevo App Simulator',
                        url: 'https://simulator.irevo.in/',
                        files: [file]
                    });
                } catch (err) {
                    console.error("Share failed:", err.message);
                }
  });
   
  }
    
    const shareText = () => {
 try {
                     navigator.share({
                        title: "iRevo App Simulator",
                        text: 'Check out iRevo App Simulator',
                        // url: 'https://simulator.irevo.in/',
                         });
                } catch (err) {
                    console.error("Share failed:", err.message);
                }
    }
  return (
    <div className="App">
      <button onClick={() => shareText()}>Share text in firefox</button>
 <div
                                id="carouselExampleCaptions"
                                className="carousel carousel-dark slide"
                                data-bs-ride="false"
                                style={{ height: "700px" }}
                            >
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                </div>

                                <div className="carousel-inner" id="d1">
                                    <div className="carousel-item active" id="slidedata">
                                       <img src="https://consappsrvr.irevo.in/images/party_logo/default_logo.png" alt="im" width="100%" height="650px" id="s1"/>
                                    </div>

                                    <div className="carousel-item" id="slidedata">
                                         <img src="https://consappsrvr.irevo.in/images/store_image/default_1.jpg" alt="im" width="100%" height="650px" id="s2"/>
                                    </div>

                                    <div className="carousel-item" id="slidedata">
                                       <img src="https://consappsrvr.irevo.in/images/upi_qrcode/10000000087343/2577645936986148.jpg" alt="im" width="100%" height="650px" id="s3"/>
                                    </div>

                                    <div className="carousel-item" id="slidedata">
                                        <img src="https://consappsrvr.irevo.in/images/offers/10000000087343/10000000006310_720X300.png" alt="im" width="100%" height="650px" id="s4"/>
                                    </div>

                                    <div className="carousel-item" id="slidedata">
                                        <img src="https://consappsrvr.irevo.in/images/store_setup/welcome_banner_delivery.png" alt="im" width="100%" height="650px" id="s5"/>
                                    </div>

                                    <div className="carousel-item" id="slidedata">
                                         <img src="https://consappsrvr.irevo.in/images/store_image/default_1.jpg" alt="im" width="100%" height="650px" id="s6"/>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="carousel-control-prev"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button
                                    type="button"
                                    className="carousel-control-next"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
<div className="text-center mt-4 mb-3">
                                <a
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => handleImage()}
                                >
                                    Share
                                </a>
                            </div>
    </div>
  );
}

const handleImage = () => {
  var node = document.getElementsByClassName('carousel-item active')[0];
  
var myimg = node.getElementsByTagName('img')[0];
  var mysrc = myimg.src;

    console.log('node ', node , mysrc);

  fetch(mysrc)
  .then(response => response.blob())
      .then(blob => {
    
                        const file = new File([blob], 'fileName.png', { type: blob.type });

        try {
                     navigator.share({
                        // title: "iRevo App Simulator",
                        // text: 'Check out iRevo App Simulator',
                        // url: 'https://simulator.irevo.in/',
                        files: [file]
                    });
                } catch (err) {
                    console.error("Share failed:", err.message);
                }
  });

 
     

    }

export default App;
