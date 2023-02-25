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

      <div className="service-bottom">
        <div className="service-bottom-left">
          <h2>
            We'll help <span>build</span> your dream properties
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius enim
            aut expedita error est excepturi quas ex sequi maxime facere
            dolorem, ducimus officiis quaerat ratione soluta repellat. Nisi,
            dolore odit!
          </p>

          <div className="service-bottom-container">
            <button className="service-bottom-btn">Get in touch</button>
          </div>

          <div className="service-bottom-num">
            <div className="service-bottom-num-box">
              <span className="number">
                2.75<span className="service-color">X</span>
              </span>

              <span className="desc">Description here</span>
            </div>
            <div className="service-bottom-num-box">
              <span className="number">
                80.5<span className="service-color">%</span>
              </span>
              <span className="desc">Description here</span>
            </div>
          </div>
        </div>
        <div className="service-bottom-right">
          <img src="/Rectangle 10.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Services;
