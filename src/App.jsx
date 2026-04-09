import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen">
        
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Tech />
        <Works />
        
        {/* 🔥 LA CORRECTION EST ICI 🔥 */}
        {/* On met Hobby et Contact dans le MÊME bloc, avec UN SEUL fond étoilé */}
        <div className="relative z-0">
          <Hobby />
          <Contact />
          <StarsCanvas /> {/* Il va s'étendre en fond sur les deux sections ! */}
        </div>

        <Footer />
      </div>

      
    </BrowserRouter>
  );
}

export default App;