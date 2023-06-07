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
  return (
    <div className="App">
      <button onClick={() => shareImage()}>Share</button>

    </div>
  );
}

/*const handleImage = () => {
        setLoader(true);
        var node = document.getElementsByClassName('carousel-item active')[0];
        htmlToImage.toPng(node)
            .then(async function (dataUrl) {
                setImgbs(dataUrl);
                // const file = new File({dataUrl}, "some.png", { type: "image/png" });
                const blob = await (await fetch(dataUrl)).blob();
                const file = new File([blob], 'fileName.png', { type: blob.type });

                try {
                    await navigator.share({
                        title: "iRevo App Simulator",
                        text: 'Check out iRevo App Simulator',
                        url: 'https://simulator.irevo.in/',
                        files: [file]
                    });
                } catch (err) {
                    console.error("Share failed:", err.message);
                }

                setLoader(false)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });

    }*/

export default App;
