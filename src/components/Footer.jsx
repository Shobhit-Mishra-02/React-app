import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="upper-footer">
        <div className="upper-footer-left">
          <img src="/Logo.svg" alt="logo" />
          <ul>
            <li>Footer link</li>
            <li>Footer link</li>
            <li>Footer link</li>
          </ul>
        </div>
        <div className="upper-footer-right">
          <img src="/discord-fill 1.svg" alt="image" />
          <img src="/facebook-circle-fill (1) 1.svg" alt="image" />
          <img src="/twitter-fill 2.svg" alt="image" />
        </div>
      </div>

      <div className="lower-footer">
        <div className="lower-footer-left">
          © All Rights Reserved. Template by Flowbase. Powered by Webflow
        </div>
        <div className="lower-footer-right">
          © All Rights Reserved. Template by Flowbase. Powered by Webflow
        </div>
      </div>
    </div>
  );
};

export default Footer;
