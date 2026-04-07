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
import Footer from "./components/Footer"; // <-- NOUVEAU

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
        <Hobby />
        
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        <Footer /> {/* <-- NOUVEAU: Le Footer vient clôturer le site */}
      </div>

      <CustomCursor />
    </BrowserRouter>
  );
}

export default App;