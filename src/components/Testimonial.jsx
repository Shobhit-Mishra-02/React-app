import "../styles/Testimonial.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Card = ({ para, name, post }) => (
  <div className="testimonial-card">
    <p>{para}</p>
    <div className="testimonial-auth">
      <img src="/image 7.png" alt="avatar" />
      <div className="testimonial-auth-name">
        <h3>{name}</h3>
        <span>{post}</span>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const testimonials = [
    {
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturisuscipit aperiam perspiciatis asperiores ab eveniet similique consequunturid. Aut, deleniti error tenetur suscipit officia consectetur fugiatquibusdam accusantium libero animi.",
      name: "James Smith1",
      post: "Designer @flowbase.co",
    },
    // {
    //   para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturisuscipit aperiam perspiciatis asperiores ab eveniet similique consequunturid. Aut, deleniti error tenetur suscipit officia consectetur fugiatquibusdam accusantium libero animi.",
    //   name: "James Smith2",
    //   post: "Designer @flowbase.co",
    // },
    // {
    //   para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturisuscipit aperiam perspiciatis asperiores ab eveniet similique consequunturid. Aut, deleniti error tenetur suscipit officia consectetur fugiatquibusdam accusantium libero animi.",
    //   name: "James Smith3",
    //   post: "Designer @flowbase.co",
    // },
  ];

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
          {testimonials.map((testimonial) => (
            <Card
              para={testimonial.para}
              name={testimonial.name}
              post={testimonial.post}
            />
          ))}
          {/* <Card /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
