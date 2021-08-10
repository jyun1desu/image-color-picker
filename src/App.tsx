import { useState } from 'react';
import Header from "component/molecules/Header";
import UploadZone from "component/molecules/UploadZone";
import MainContent from "component/molecules/MainContent";
import Footer from "component/molecules/Footer";
import DefaultImage from "assets/defaultImageBase64";
import "./App.css";

function App() {
  const [imageData, setImageData] = useState(DefaultImage)
  return (
      <div className="App">
        <Header />
        <UploadZone setImageData={setImageData}/>
        <MainContent imageData={imageData} />
        <Footer />
      </div>
  );
}

export default App;
