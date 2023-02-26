import "../styles/Testimonial.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Card = () => (
  <div className="testimonial-card">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
      suscipit aperiam perspiciatis asperiores ab eveniet similique consequuntur
      id. Aut, deleniti error tenetur suscipit officia consectetur fugiat
      quibusdam accusantium libero animi.
    </p>
    <div className="testimonial-auth">
      <img src="/image 7.png" alt="avatar" />
      <div className="testimonial-auth-name">
        <h3>James Smith</h3>
        <span>Designer @flowbase.co</span>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-content">
        <h3>testimonials</h3>
        <h2>What our clients have been saying about us.</h2>
        <div className="testimonial-btn-container">
          <div className="left-arrow">
            <BiLeftArrowAlt />
          </div>
          <div className="right-arrow">
            <BiRightArrowAlt />
          </div>
        </div>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-window">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
