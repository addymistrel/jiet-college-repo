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

// ... (previous code)

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  return (
    <div className="testimonial">
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 className="std-review-h1">STUDENT REVIEWS</h1>
        <Slider {...settings}>
          <Card
            img="./assets/images/jietimage/newbanner2.png"
            testimonial={testimonial1}
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg"
            testimonial={testimonial2}
          />
          <Card
            img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg"
            testimonial={testimonial3}
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, testimonial }) => {
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
      {testimonial}
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "red" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};


const testimonial1 = (
  <p>
    Enrolling in courses was one of the best decisions I made for my education
    journey. The Student Reviews section in the TestimonialsSlider provides an
    authentic glimpse into the experiences of others. The slick design and
    smooth navigation with the arrow buttons make it easy to explore these
    inspiring stories. Kudos to the team for creating such an engaging
    platform!
  </p>
);

const testimonial2 = (
  <p>
    As a visual learner, the TestimonialsSlider played a crucial role in
    influencing my decision to join this educational platform. The captivating
    images paired with heartfelt testimonials provided me with a real sense of
    the community and success stories within. The autoplay feature and elegant
    arrow buttons make the experience seamless and enjoyable. Truly a testament
    to the excellence of the educational programs.
  </p>
);

const testimonial3 = (
  <p>
    The TestimonialsSlider is a dynamic showcase of success stories and
    positive experiences within the educational community. The well-designed
    cards, accompanied by engaging narratives and professional endorsements,
    create a persuasive case for anyone considering joining. The autoplay
    functionality ensures a continuous flow of inspiration, and the intuitive
    arrow buttons allow for easy navigation. A fantastic addition to the
    platform!
  </p>
);

export default TestimonialsSlider;

