import Brand from "./components/Brand";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Testimonial from "./components/Testimonial";
import "./styles/App.css";

function App() {
  return (
    <div>
      <div className="header">
        <Navigation />
        <Header />
      </div>

      <div className="brand-section">
        <Brand />
      </div>

      <Services />

      <Solutions />

      <Projects />

      <Features />

      <div className="contact">
        <Contact />
      </div>

      <Testimonial />

      <Footer />
    </div>
  );
}

export default App;
