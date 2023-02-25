import Brand from "./components/Brand";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
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
    </div>
  );
}

export default App;
