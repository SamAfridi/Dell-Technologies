
import './App.css';
import Haider from './Components/Haider';
import ImgSection from './Components/ImgSection';
import IconBar from './Components/IconBar';
import TechSection from './Components/TechSection';
import About from './Components/About';
import Supports from './Components/Supports';
import TechnologiesGrid from './Components/TechnologiesGrid';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Haider />
     <ImgSection />
     <IconBar />
     <TechSection />
     <About />
     <Supports />
     <TechnologiesGrid />
     <Footer />
    </div>
  );
}

export default App;
