import React from "react";
import "./Footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer class="footer-section">
      <div class="container mx-auto sm:px-4">
        <div class="footer-cta pt-5 pb-5">
          <div class="flex flex-wrap ">
            <div class="xl:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cta-text">
                  <h4>GET IN TOUCH</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#757575",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <FaHome />
                    </div>
                    <div>
                      <b>
                        JIET Institute
                        <br />
                        Near Huda Sector - 9, Safidon Road Jind - 126102
                        (Haryana)
                      </b>
                    </div>
                  </div>
                  <div
                    id="get-touch"
                    style={{
                      paddingTop: "2%",
                      display: "flex",
                      alignItems: "center",
                      color: "#757575",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <IoCall />
                    </div>
                    <div>
                      <b>+91-9996135006</b>
                      <br />
                      <b>+91-9896948004 (Admin)</b>
                      <br />
                      <b>+91-9896948005 (Admission)</b>
                    </div>
                  </div>
                  <div
                    id="get-touch"
                    style={{
                      paddingTop: "2%",
                      display: "flex",
                      alignItems: "center",
                      color: "#757575",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <MdEmail />
                    </div>
                    <div>
                      <b>info@jietjind.ac.in</b>
                    </div>
                  </div>
                  <div
                    id="get-touch"
                    style={{
                      paddingTop: "2%",
                      display: "flex",
                      alignItems: "center",
                      color: "#757575",
                    }}
                  >
                    <div style={{ marginRight: "10px" }}>
                      <FaMapLocationDot />
                    </div>
                    <div>
                      <b>Open in Google Maps</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-phone"></i>
                <div class="cta-text">
                  <h4>About</h4>
                  <span>
                    <b>
                      JIET offers you a wide choice of well-structured and
                      ambitious programmes. At every stage, you are supported by
                      inspirational teaching and supervision,first-class library
                      and IT facilities and a diverse schedule of
                      seminars,workshops and events
                    </b>
                  </span>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 pr-4 pl-4 md:w-1/3 pr-4 pl-4 mb-30">
              <div class="single-cta">
                <i class="far fa-envelope-open"></i>
                <div class="cta-text" id="dept">
                  <h4>Departments</h4>
                  <span>
                    <b>Computer Science & Engineering</b>
                  </span>
                  <br />
                  <span>
                    <b>Electrical Engineering</b>
                  </span>
                  <br />
                  <span>
                    <b>Mechanical Engineering</b>
                  </span>
                  <br />
                  <span>
                    <b>Civil Engineering</b>
                  </span>
                  <br />
                  <span>
                    <b>Management Studies (BBA)</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="flex flex-wrap ">
            <div class="xl:w-1/3 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="/">
                    <img
                      src="/assets/images/aicte.png"
                      class="max-w-full h-auto"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="footer-text">
                  <p>
                    Jind Institute of Engineering and Technology is situated on
                    Jind-Panipat road at a distance of 3 km from Bus Stand,Jind.
                    It was established in 1998,with a single-minded objective to
                    give students global level engineering and management
                    education.
                  </p>
                </div>
                <div class="footer-social-icon">
                  <span>Follow us</span>
                  <div style={{ display: "flex" }}>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#039be5"
                          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                        ></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#03a9f4"
                          d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"
                        ></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#0288d1"
                          d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
                        ></path>
                        <rect
                          width="4"
                          height="15"
                          x="14"
                          y="19"
                          fill="#fff"
                        ></rect>
                        <path
                          fill="#fff"
                          d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4	C35,34,35,24.9,35,24.5z"
                        ></path>
                      </svg>
                    </a>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#FF3D00"
                          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                        ></path>
                        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/3 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Programs</a>
                  </li>
                  <li>
                    <a href="#">Departments</a>
                  </li>
                  <li>
                    <a href="#">Campus Life</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">JIND Genius</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="xl:w-1/3 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    By subscribing to our mailing list you will always be update
                    with the latest news from us.
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <FaTelegramPlane
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container mx-auto sm:px-4">
          <div class="flex flex-wrap ">
            <div class="xl:w-1/2 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 text-center lg:text-left">
              <div class="copyright-text">
                <p>Copyright &copy; 2023, All Right Reserved </p>
              </div>
            </div>
            <div class="xl:w-1/2 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 hidden lg:block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <a href="#">Nats</a>
                  </li>
                  <li>
                    <a href="#">Anti Ragging</a>
                  </li>
                  <li>
                    <a href="#">Mandatory Disclosure</a>
                  </li>
                  <li>
                    <a href="#">AICTE approval letter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
