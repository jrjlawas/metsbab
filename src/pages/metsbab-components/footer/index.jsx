import footerIcon1 from "@/assets/img/icons/vl-footer-ic-1.1.svg";
import footerIcon2 from "@/assets/img/icons/vl-footer-ic-1.2.svg";
import footerIcons from "@/assets/img/icons/vl-footer-2.1.svg";
import logo4 from "@/assets/img/logo/metsbab_icon.png";

import brandLogo1 from "@/assets/img/metsbab/partners/NIWI.png";
import brandLogo2 from "@/assets/img/metsbab/partners/GD.png";
import brandLogo3 from "@/assets/img/metsbab/partners/APC.png";
import brandLogo4 from "@/assets/img/metsbab/partners/PCMT.svg";
import brandLogo5 from "@/assets/img/metsbab/partners/RCBC.png";
import brandLogo6 from "@/assets/img/metsbab/partners/CC.png";
import brandLogo7 from "@/assets/img/metsbab/partners/MCG.png";
import brandLogo8 from "@/assets/img/metsbab/partners/GC.png";
import brandLogo9 from "@/assets/img/metsbab/partners/NW.png";
import brandLogo10 from "@/assets/img/metsbab/partners/CDI.png";

import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="vl-footer-bg-4">
      <Container>
        <Row>
          <div id="vl-brand-active4" className="owl-carousel owl-theme">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={5}
              loop
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo1} alt="brandLogo1" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo2} alt="brandLogo2" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo3} alt="brandLogo3" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo4} alt="brandLogo4" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo5} alt="brandLogo5" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo6} alt="brandLogo6" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo7} alt="brandLogo7" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo8} alt="brandLogo8" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo9} alt="brandLogo9" />
              </SwiperSlide>
              <SwiperSlide className="single-brand-logo">
                <img src={brandLogo10} alt="brandLogo10" />
              </SwiperSlide>
            </Swiper>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <Link to="/">
                  <img src={logo4} alt="logo4" />
                </Link>
              </div>
              <div className="vl-footer-content">
                <p className="para">
                  At MetsBab Ltd., we empower you with knowledge that fuels
                  success. Our online programs are budget-friendly, with
                  government funding options available to support your education
                  and career goals.
                </p>
              </div>
              <div className="vl-footer-social-1">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100093573764738"
                      target="_"
                    >
                      <FaFacebookF className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <FaInstagram className="fa-brands fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGithub className="fa-brands fa-github" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-90 mb-30">
              <h3 className="title">Quick Links</h3>
              <div className="vl-footer-menu">
                <ul>
                  {/* <li>
                    <Link to="/multi-page/senior-citizen">Home Page</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li> */}
                  <li>
                    <a href="/contactus">Enrollment</a>
                  </li>
                  <li>
                    <a href="/">Referrals</a>
                  </li>
                  {/* <li>
                    <Link to="/blog">News &amp; Blog</Link>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Our services</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <a href="#">Business & Administration</a>
                  </li>
                  <li>
                    <a href="#">Technology & Digital Skills</a>
                  </li>
                  <li>
                    <a href="#">Health & Wellness</a>
                  </li>
                  <li>
                    <a href="#">Beauty & Aesthetics</a>
                  </li>
                  <li>
                    <a href="#">Human Services & Community Support</a>
                  </li>
                  <li>
                    <a href="#">Office & Medical Support</a>
                  </li>
                  <li>
                    <a href="#">Design & Technical</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-3 mb-30">
              <h3 className="title">Contact Us</h3>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIcon1} alt="footerIcon1" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="mailto:admissionsadvisormetsbab0@gmail.com">
                    admissionsadvisor metsbab0@gmail.com
                  </a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIcon2} alt="footerIcon2" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="#">
                    Marbank Drive NE , Calgary, AB, Canada, Alberta
                  </a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIcons} alt="footerIcons" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:+1 587-434-2085">+1 587-434-2085</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="vl-copyright">
          <Row>
            <Col lg={12} className="text-center">
              <p className="vl-copyright-text">
                © 2025 <span style={{ color: "#F47C00" }}>Glotti</span>{" "}
                <span style={{ color: "#0066CC" }}>Business Solutions</span>.
                All Rights Reserved.
                {/* © 2025 Glotti Business Solutions. All Rights Reserved. */}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
