import './App.css';
import Header from 'component/molecules/Header';
import UploadZone from 'component/molecules/UploadZone';
import MainContent from 'component/molecules/MainContent';
import Footer from 'component/molecules/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadZone />
      <MainContent />
      <Footer />
     </div> 
  );
}

export default App;
