import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialsSlider.css";
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowBack style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoIosArrowForward style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  return (
    <div className="testimonial">
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
        <Slider {...settings}>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <img
        src={img}
        alt="Client"
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "1px solid lightgray",
          marginBottom: 20,
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et,
        adipisci veritatis odit perferendis nulla ratione maxime commodi cumque
        velit ipsum magnam doloremque? A, commodi obcaecati laudantium possimus
        error natus?
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "red" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default TestimonialsSlider;
