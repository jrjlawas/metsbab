import { useEffect, useRef, useState } from "react";
import arrowBig from "@/assets/img/icons/vl-arrowbig-left.svg";
import reviewIcon from "@/assets/img/icons/vl-review-icon-4.1.svg";
import uparrow4 from "@/assets/img/icons/vl-uparrow4.svg";
import danthumbnail from "@/assets/img/metsbab/testimonials/Dan.jpg";
import test1 from "@/assets/img/metsbab/testimonials/test1.png";
import test2 from "@/assets/img/metsbab/testimonials/test2.png";

import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const Testimonial = () => {
  const next = () => {
    sliderRef2.current?.slickNext();
  };
  const previous = () => {
    sliderRef2.current?.slickPrev();
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  return (
    <section id="testimonial" className="vl-testimonial4 sp2">
      <div className="shape">
        <img src={arrowBig} alt="arrowBig" />
      </div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="testimonial-slides-wrap">
              <Slider
                asNavFor={nav2}
                ref={sliderRef1}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                fade={true}
                className="slider-thumb slider-for1"
              >
                <div className="single-thumb">
                  <img className="w-100" src={danthumbnail} alt="thumbImg" />
                </div>

                <div className="single-thumb">
                  <img className="w-100" src={danthumbnail} alt="thumbImg" />
                </div>
              </Slider>

              <div className="content-box-2">
                <Slider
                  asNavFor={nav1}
                  ref={sliderRef2}
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={false}
                  focusOnSelect={true}
                  className="slider-sm slider-nav1 p-relative"
                >
                  <div className="slider-content-box content-box2">
                    <div className="icon">
                      <ul>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="para">
                      “Highly recommend.. Thankyou kuya Dan sa pagguide sakin
                      simula umpisa hanggang magstart na yung online class ko
                      kahit super busy ka anjan ka pa din para iguide ako
                      salamat po ulit kuya godbless po palagi🥰🥰😇”
                    </p>
                    <div className="slider-flex">
                      <div className="user">
                        <img src={test1} alt="thumbSmImg" />
                      </div>
                      <div className="content">
                        <a href="#" className="title">
                          Kenji Vitacion Orcino
                        </a>
                        <span>MetsBab Student</span>
                      </div>
                    </div>
                  </div>

                  <div className="slider-content-box content-box2">
                    <div className="icon">
                      <ul>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                        <li>
                          <span>
                            <img src={reviewIcon} alt="reviewIcon" />
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="para">
                      “I had such a great experience with MetsBab Services! Dan,
                      was so helpful with my school application—he explained
                      everything clearly, answered all my questions, and made
                      the process way less stressful. Thank you for your
                      patience and guidance, Dan! Highly recommend!”
                    </p>
                    <div className="slider-flex">
                      <div className="user">
                        <img src={test2} alt="thumbSmImg" />
                      </div>
                      <div className="content">
                        <a href="#" className="title">
                          Jhen Lantoria - Montorio
                        </a>
                        <span>MetsBab Student</span>
                      </div>
                    </div>
                  </div>
                </Slider>

                <div className="slider-sm slider-nav1 p-relative">
                  <span
                    className="smarrow smarrow2 abarow arrow-lft slick-arrow"
                    onClick={previous}
                  >
                    <FaAngleLeft />
                  </span>
                  <span
                    className="smarrow smarrow2 abarow arrow-right slick-arrow"
                    onClick={next}
                  >
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-testimonial-content">
              <div className="vl-section-title4">
                <h5
                  className="subtitle"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Testimonial
                </h5>
                <h2 className="title text-anime-style-3">
                  What Our Students Say
                </h2>
                <p
                  className="para pb-32"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Hear from our students and graduates! Explore inspiring
                  stories of success, growth, and career transformation made
                  possible through Metsbab Services programs, in collaboration
                  with over 30 state colleges and universities worldwide.
                </p>
                <div className="btn-area4">
                  <a
                    href="/"
                    className="header-btn1 testimonial-btn4 testibtn4"
                  >
                    Enroll Now{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
              <Row>
                <Col lg={6} md={6} className="mb-30">
                  <div className="icon-box-bg">
                    <div className="icon">
                      <span>
                        <img src={uparrow4} alt="uparrow4" />
                      </span>
                    </div>
                    <h3 className="title">
                      <span className="title counter">890</span> +
                    </h3>
                    <span>Satisfied Students</span>
                  </div>
                </Col>
                <Col lg={6} md={6} className="mb-30">
                  <div className="icon-box-bg active">
                    <div className="icon">
                      <span>
                        <img src={uparrow4} alt="uparrow4" />
                      </span>
                    </div>
                    <h3 className="title">
                      <span className="title counter">40</span> +
                    </h3>
                    <span>Available Programs</span>
                  </div>
                </Col>
                {/* <Col lg={12} md={4} className="mb-30">
                  <div className="icon-box-bg active">
                    <div className="icon">
                      <span>
                        <img src={uparrow4} alt="uparrow4" />
                      </span>
                    </div>
                    <h5 className="title">
                      <span className="title counter">30</span> +
                    </h5>
                    <span>
                      “Over 30 State Colleges and Universities Trust Us
                      Worldwide”
                    </span>
                  </div>
                </Col> */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Testimonial;
