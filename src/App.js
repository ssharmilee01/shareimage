import "./App.css";

function App() {
  const shareImage = async () => {
    //https://consappsrvr.irevo.in/images/store_setup/welcome_banner_delivery.png

    fetch(
      "https://consappsrvr.irevo.in/images/store_setup/welcome_banner_delivery.png"
    )
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], "fileName.png", { type: blob.type });

        try {
          navigator.share({
            title: "iRevo App Simulator",
            text: "Check out iRevo App SimulatorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est ante in nibh mauris cursus mattis. Aenean euismod elementum nisi quis eleifend quam adipiscing. Sem fringilla ut morbi tincidunt. Consequat mauris nunc congue nisi vitae suscipit. Sodales ut eu sem integer vitae justo eget magna fermentum. Etiam sit amet nisl purus. Turpis in eu mi bibendum neque egestas congue. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Sit amet facilisis magna etiam. Velit euismod in pellentesque massa placerat duis ultricies. Arcu non sodales neque sodales ut etiam sit amet nisl. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis.Facilisis volutpat est velit egestas. Ut porttitor leo a diam sollicitudin tempor id eu. Nulla aliquet enim tortor at. Purus in mollis nunc sed id semper risus in. In cursus turpis massa tincidunt dui ut ornare. Tortor pretium viverra suspendisse potenti. Arcu dui vivamus arcu felis bibendum. Nisl nunc mi ipsum faucibus vitae aliquet nec. Suspendisse in est ante in nibh mauris cursus. Molestie nunc non blandit massa. Tristique sollicitudin nibh sit amet commodo. Nisi lacus sed viverra tellus in. Tristique senectus et netus et malesuada fames ac turpis egestas.Vel pharetra vel turpis nunc eget lorem. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Scelerisque viverra mauris in aliquam. Sit amet facilisis magna etiam tempor. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Eu augue ut lectus arcu bibendum at. Fermentum iaculis eu non diam. Amet aliquam id diam maecenas. Sit amet massa vitae tortor condimentum. Tellus orci ac auctor augue mauris augue neque gravida. Rhoncus dolor purus non enim praesent elementum. Vehicula ipsum a arcu cursus. Tristique senectus et netus et. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Pharetra pharetra massa massa ultricies mi quis hendrerit. Semper quis lectus nulla at volutpat diam ut.",
            url: "https://simulator.irevo.in/",
            files: [file],
          });
        } catch (err) {
          console.error("Share failed:", err.message);
        }
      });
  };

  // const shareText = () => {
  //     try {

  //           let shareData = {
  //     title: 'MDN',
  //     text: 'Learn web development on MDN!',
  //     url: 'https://nextjs.org/docs/getting-started/installation',
  //           }

  //                  navigator.share(shareData);
  //             } catch (err) {
  //                 console.error("Share failed:", err.message);
  //             }
  // }
  return (
    <div className="App">
      <button onClick={() => shareImage()}>Share text in firefox</button>
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide"
        data-bs-ride="false"
        style={{ height: "700px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        <div className="carousel-inner" id="d1">
          <div className="carousel-item active" id="slidedata">
            <img
              src="https://consappsrvr.irevo.in/images/party_logo/default_logo.png"
              alt="im"
              width="100%"
              height="650px"
              id="s1"
            />
          </div>

          <div className="carousel-item" id="slidedata">
            <img
              src="https://consappsrvr.irevo.in/images/store_image/default_1.jpg"
              alt="im"
              width="100%"
              height="650px"
              id="s2"
            />
          </div>

          <div className="carousel-item" id="slidedata">
            <img
              src="https://consappsrvr.irevo.in/images/upi_qrcode/10000000087343/2577645936986148.jpg"
              alt="im"
              width="100%"
              height="650px"
              id="s3"
            />
          </div>

          <div className="carousel-item" id="slidedata">
            <img
              src="https://consappsrvr.irevo.in/images/offers/10000000087343/10000000006310_720X300.png"
              alt="im"
              width="100%"
              height="650px"
              id="s4"
            />
          </div>

          <div className="carousel-item" id="slidedata">
            <img
              src="https://consappsrvr.irevo.in/images/store_setup/welcome_banner_delivery.png"
              alt="im"
              width="100%"
              height="650px"
              id="s5"
            />
          </div>

          <div className="carousel-item" id="slidedata">
            <img
              src="https://consappsrvr.irevo.in/images/store_image/default_1.jpg"
              alt="im"
              width="100%"
              height="650px"
              id="s6"
            />
          </div>
        </div>

        <button
          type="button"
          className="carousel-control-prev"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          type="button"
          className="carousel-control-next"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="text-center mt-4 mb-3">
        <a
          type="button"
          className="btn btn-primary"
          onClick={() => handleImage()}
        >
          Share Image 1
        </a>
      </div> */}
    </div>
  );
}

// const handleImage = () => {
//   var node = document.getElementsByClassName("carousel-item active")[0];

//   var myimg = node.getElementsByTagName("img")[0];
//   var mysrc = myimg.src;

//   console.log("node ", node, mysrc);

//   fetch(mysrc)
//     .then((response) => response.blob())
//     .then((blob) => {
//       const file = new File([blob], "fileName.png", { type: blob.type });

//       try {
//         navigator.share({
//           files: [file],
//           title: "iRevo App Simulator",
//           // text: 'Check out iRevo App Simulator',
//           // url: "Check out iRevo App Simulator : "+'https://simulator.irevo.in/',
//         });
//       } catch (err) {
//         console.error("Share failed:", err.message);
//       }
//     });
// };

export default App;
