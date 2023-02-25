import "../styles/Solutions.css";

const Card = () => {
  return (
    <div className="card">
      <h3>Interior Design</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non iure,
        ipsam pariatur nulla debitis illo. Quibusdam quasi voluptate sapiente
        repellat
      </p>

      <div className="image-container">
        <img src="/image2.png" alt="image" />
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="solutions-section">
      <div className="solutions-heading">
        <span>Service</span>
        <h2>Providing solutions that meets your need</h2>
      </div>

      <div className="card-section">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Solutions;
