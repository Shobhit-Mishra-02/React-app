import "../styles/Services.css";

const Card = () => (
  <div className="service-card">
    <img src="/pencil-ruler-2-line 1.svg" alt="logo" />
    <h3>Title here</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      excepturi dolorum cumque enim natus cupiditate non rem. Molestiae,
      expedita modi at
    </p>
  </div>
);

const Services = () => {
  return (
    <div className="services-section">
      <h3 className="service-heading">
        Browse through our list of services in construction
      </h3>

      <div className="service-cards-section">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="service-banner">
        <img src="/Frame 94.png" alt="service banner" />
      </div>
    </div>
  );
};

export default Services;
