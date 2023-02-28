import "../styles/Testimonial.css";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";

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

const testimonials = [
  {
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturisuscipit aperiam perspiciatis asperiores ab eveniet similique consequunturid. Aut, deleniti error tenetur suscipit officia consectetur fugiatquibusdam accusantium libero animi.",
    name: "James Smith1",
    post: "Designer @flowbase.co",
  },
  {
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturisuscipit aperiam perspiciatis asperiores ab eveniet similique consequunturid. Aut, deleniti error tenetur suscipit officia consectetur fugiatquibusdam accusantium libero animi.",
    name: "James Smith2",
    post: "Designer @flowbase.co",
  },
  {
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturisuscipit aperiam perspiciatis asperiores ab eveniet similique consequunturid. Aut, deleniti error tenetur suscipit officia consectetur fugiatquibusdam accusantium libero animi.",
    name: "James Smith3",
    post: "Designer @flowbase.co",
  },
];

const Testimonial = () => {
  const [slide, setSlide] = useState(0);

  const prev = () => {
    if (slide > 0) setSlide(slide - 1);
    else setSlide(testimonials.length - 1);
  };

  const next = () => {
    if (slide < testimonials.length - 1) setSlide(slide + 1);
    else setSlide(0);
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-content">
        <h3>testimonials</h3>
        <h2>What our clients have been saying about us.</h2>
        <div className="testimonial-btn-container">
          <div onClick={prev} className="left-arrow">
            <BiLeftArrowAlt />
          </div>
          <div onClick={next} className="right-arrow">
            <BiRightArrowAlt />
          </div>
        </div>
      </div>

      <div className="testimonial-container">
        <div
          style={{ transform: `translateX(-${slide * 100}%)` }}
          className="testimonial-window"
        >
          {testimonials.map((testimonial) => (
            <Card
              para={testimonial.para}
              name={testimonial.name}
              post={testimonial.post}
              key={testimonial.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
