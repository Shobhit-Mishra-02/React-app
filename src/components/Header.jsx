import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-section">
        <h3 className="header-heading">
          Build better <span>construction</span> better
        </h3>

        <p className="header-para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In soluta
          quis consectetur facere impedit saepe
        </p>

        <div className="header-btn-section">
          <button className="navbar-btn">Get in touch</button>
          <button className="navbar-btn-outline">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
