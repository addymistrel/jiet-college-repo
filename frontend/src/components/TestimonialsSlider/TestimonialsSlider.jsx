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
            img="./assets/images/upload/chirag.png"
            testimonial={testimonial1}
            name="CHIRAG LAKHINA"
            jobProfile="SOFTWARE ENGINEER AT ACCENTURE HYDERABAD"
          />
          <Card
            img="./assets/images/upload/deepak.png"
            testimonial={testimonial2}
            name="DEEPAK SINGHLA"
            jobProfile="INCOME TAX DEPARTMENT,GOI"
          />
          {/* <Card
            img="./assets/images/upload/okesh.png"
            testimonial={testimonial3}
            name="OKESH GOYAL"
            jobProfile="ASSISTANT MANAGER AT SARVA HARYANA GRAMIN BANK"
          /> */}
          <Card
            img="./assets/images/upload/paryag.png"
            testimonial={testimonial4}
            name="PARYAG KUMAR"
            jobProfile="ADVISORY SYSTEM ANALYST AT IBM"
          />
          <Card
            img="./assets/images/upload/ravneet.png"
            testimonial={testimonial5}
            name="RAVNEET SODHI"
            jobProfile="NAGARRO SOFTWARE"
          />
          <Card
            img="./assets/images/upload/prerna.png"
            testimonial={testimonial6}
            name="PRERNA KOHLI"
            jobProfile="S/W DEVELOPER COGNIZANT PUNE"
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, testimonial, name, jobProfile }) => {
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
          width: 130,
          height: 130,
          borderRadius: "50%",
          border: "1px solid lightgray",
          marginBottom: 20,
        }}
      />
      {testimonial}
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "red" }}>{name}</span> ,{" "}
        {jobProfile}
      </p>
    </div>
  );
};

const testimonial1 = (
  <p>
    Quality education is the most important factor in a students life and I have
    realized that jiet is the one who masters in the same. There is no
    compromise in that.
  </p>
);

const testimonial2 = (
  <p>
    It's really been a great learning experience at JIET... I just loved the way
    i was thought at JIET and I am very thankful to all the faculty members for
    their continuous support and valuable guidance.
  </p>
);

// const testimonial3 = (
//   <p>
//     JIET has a very nice environment and away from politics, I am happy that i
//     have taken admission in CS branch in such a well disciplined. Student and
//     Staff are very cooperative.
//   </p>
// );

const testimonial4 = (
  <p>
    JIET is a leading institute of technical as well as professional studies
    with elite class faculty and placement opportunities for all, event oriented
    good exposure in competing with optimism beautiful campus and lovely
    environment provided by fellow student!
  </p>
);

const testimonial5 = (
  <p>
    I am glad to be part of the JIET . It's a pleasure for me to be a part of
    the JIET family. Such a supportive environment and a bunch of talented
    faculty. It's always wonderful remembering moments spent there.
  </p>
);

const testimonial6 = (
  <p>
    The college has great modern facilities which promotes a great learning
    environment and flexible schedule that suit the needs of a student like me.
  </p>
);

export default TestimonialsSlider;
