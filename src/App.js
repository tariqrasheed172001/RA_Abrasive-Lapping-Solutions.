import './App.css';
import Home from './components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import About from './components/About/About';
import Services from './components/Services/Services';
import Product from './components/Products/Product';
import Cta from './components/Cta/Cta';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react';







function App() {

  AOS.init();

window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    // once: true,
    mirror: false
  });
});

const [isOpen, setOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setOpen(true);
    }else if(window.scrollY == 0){
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleClick = () =>{
    backToTop();
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="App">
     <Home />
     <About />
     <Services />
     <Cta />
     <Product />
     <Team />
     <Contact />
     {
       isOpen && <button
        data-aos="zoom-in" data-aos-delay="200"
        type="button"
        onClick={handleClick}
        className="btn btn-floating btn-lg"
        id="btn-back-to-top"
        style={{backgroundColor:"#ffc451"}}
        >
        <i class="bi bi-arrow-up-circle-fill"></i>
    </button>
     }
     
    </div>
  );
}

export default App;
