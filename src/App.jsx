import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Brand from "./components/Brand";
import Services from "./components/Services";
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
    </div>
  );
}

export default App;
