import footerLogo4 from "@/assets/img/logo/metsbab_icon.png";
// import logo1 from "@/assets/img/logo/vl-logo-4.1.png";
import logo1 from "@/assets/img/logo/metsbab_icon_wt.png";
import styled, { keyframes } from "styled-components";
import useScrollEvent from "@/hooks/useScrollEvent";
import useToggle from "@/hooks/useToggle";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaAngleDown,
  FaPhoneVolume,
  FaXmark,
  FaYoutube,
} from "react-icons/fa6";

// Define keyframes
const throb = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

// Create styled button
const ThrobbingButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: transparent;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  animation: ${throb} 1.2s ease-in-out infinite;

  span {
    margin-left: 8px;
  }

  &:hover {
    background-color: transparent;
    transform: scale(1.1);
  }
`;

const Header = () => {
  const { scrollY } = useScrollEvent();
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <header>
        <div
          className={`header-area header4 homepage1 header header-sticky d-none d-lg-block mt-20 ${
            scrollY > 100 && "sticky"
          }`}
          id="header"
        >
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements header-elements-1  header-elements-4">
                  <div className="site-logo">
                    <Link to="/">
                      <img src={logo1} alt="logo1" />
                    </Link>
                  </div>
                  <div className="main-menu main-menu-4">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="#">
                          Our Programs{" "}
                          <FaAngleDown className="fa-solid fa-angle-down align-bottom" />
                        </a>
                        <ul className="dropdown-padding">
                          <li>
                            <Link to="/programs/1">
                              Business Administration
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/2">
                              Technology & Digital Skills
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/3">Health & Wellness</Link>
                          </li>
                          <li>
                            <Link to="/programs/4">Beauty & Aesthetics</Link>
                          </li>
                          <li>
                            <Link to="/programs/5">
                              Human Services & Community Support
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/6">
                              Office & Medical Support
                            </Link>
                          </li>
                          <li>
                            <Link to="/programs/7">Design & Technical</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/">About Us</a>
                      </li>
                      <li>
                        <a href="/contactus">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-area4">
                    <ThrobbingButton to="/#">
                      <Link to="/#" className="header-btn1 headbtn4">
                        Referrals{" "}
                        <span>
                          {" "}
                          <FaArrowRight />
                        </span>
                      </Link>
                    </ThrobbingButton>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <div className="mobile-header mobile-haeder4 d-block d-lg-none">
        <Container>
          <Col xs={12}>
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link to="/">
                  <img src={footerLogo4} alt="footerLogo4" />
                </Link>
              </div>
              <div
                onClick={toggle}
                className="mobile-nav-icon mobile-nav-icon3 dots-menu"
              >
                <FaBars className="fa-solid fa-bars" />
              </div>
            </div>
          </Col>
        </Container>
      </div>
      <div
        className={`mobile-sidebar mobile-sidebar1 ${
          isOpen && "mobile-menu-active"
        }`}
      >
        <div className="logosicon-area">
          <div className="logos">
            <img src={footerLogo4} alt="footerLogo4" />
          </div>
          <div onClick={toggle} className="menu-close">
            <FaXmark className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">
                Our Programs{" "}
                <FaAngleDown className="fa-solid fa-angle-down align-bottom" />
              </a>
              <ul className="dropdown-padding">
                <li>
                  <Link to="/programs/1">Business Administration</Link>
                </li>
                <li>
                  <Link to="/programs/2">Technology & Digital Skills</Link>
                </li>
                <li>
                  <Link to="/programs/3">Health & Wellness</Link>
                </li>
                <li>
                  <Link to="/programs/4">Beauty & Aesthetics</Link>
                </li>
                <li>
                  <Link to="/programs/5">
                    Human Services & Community Support
                  </Link>
                </li>
                <li>
                  <Link to="/programs/6">Office & Medical Support</Link>
                </li>
                <li>
                  <Link to="/programs/7">Design & Technical</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
          <div className="allmobilesection">
            <div className="vl-about-btn">
              <div className="btn-area4">
                <Link to="/" className="header-btn1">
                  Referrals{" "}
                  <span>
                    <FaArrowRight className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="vl-mobile-contact1">
              <h3 className="title">Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaPhoneVolume
                      size={16}
                      className="fa-solid fa-phone-volume"
                    />
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:+1 587-434-2085">+1 587-434-2085</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaEnvelope size={16} className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:admissionsadvisormetsbab0@gmail.com">
                      admissionsadvisormetsbab0@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaLocationDot
                      size={16}
                      width={16}
                      height={16}
                      className="fa-solid fa-location-dot"
                    />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:metsbab.ca@gmail.com">
                      Marbank Drive NE , Calgary, AB, Canada, Alberta
                    </a>
                  </div>
                </div>
                <div className="vl-mobile-contact1">
                  <h3 className="title">Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="https://www.facebook.com/profile.php?id=100093573764738"
                          target="_"
                        >
                          <FaFacebookF className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      {/* <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="#"
                        >
                          <FaInstagram className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="#"
                        >
                          <FaLinkedinIn className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="#"
                        >
                          <FaYoutube className="fa-brands fa-youtube" />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
