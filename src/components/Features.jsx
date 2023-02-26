import "../styles/Features.css";

const Features = () => {
  return (
    <div className="features-section">
      <div className="features-image-container">
        <img src="/Frame 106.png" alt="image" />
      </div>

      <div className="features-content">
        <h3>feature</h3>
        <h2>
          Providing solutions that meets your{" "}
          <span className="features-highlight">needs.</span>
        </h2>
        <div className="features-list">
          <div className="features-list-item">
            <img src="/checkbox-circle-fill (2) 1.svg" alt="svg" />
            <span>Lorem ipsum dolor sit, amet.</span>
          </div>
          <div className="features-list-item">
            <img src="/checkbox-circle-fill (2) 1.svg" alt="svg" />
            <span>Lorem ipsum dolor sit, amet.</span>
          </div>
          <div className="features-list-item">
            <img src="/checkbox-circle-fill (2) 1.svg" alt="svg" />
            <span>Lorem ipsum dolor sit, amet.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
