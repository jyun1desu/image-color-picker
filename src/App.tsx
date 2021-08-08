import { useState } from "react";
import "./App.css";
import Header from "component/molecules/Header";
import UploadZone from "component/molecules/UploadZone";
import MainContent from "component/molecules/MainContent";
import Footer from "component/molecules/Footer";
import { ImageBase64Context, defaultImage } from "model/imageBase64";

function App() {
  const [image, setImage] = useState(defaultImage);

  return (
    <ImageBase64Context.Provider value={{image, setImage}}>
      <div className="App">
        <Header />
        <UploadZone />
        <MainContent />
        <Footer />
      </div>
    </ImageBase64Context.Provider>
  );
}

export default App;
