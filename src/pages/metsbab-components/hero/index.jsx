import homeBg from "@/assets/img/banner/vl-home-bg-4.png";
import arrowImg2 from "@/assets/img/icons/vl-home-arrow-4.2.svg";
import arrowImg1 from "@/assets/img/icons/vl-home-arrow-4.1.svg";
import shape4 from "@/assets/img/shape/hand-shape4.1.png";
import whiteHand4 from "@/assets/img/icons/vl-white-hand4.1.svg";

// import thumb11 from "@/assets/img/banner/vl-home-thumb-4.11.png";
import thumb11 from "@/assets/img/banner/dandingal.png";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import GlightBox from "@/components/GlightBox";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    style: {
      backgroundImage: `url(${homeBg})`,
    },
  };
  return (
    <Slider {...settings} className="baner4-active ">
      <div className="vl-banner4">
        <Container>
          <GlightBox>
            <Row>
              <Col lg={6}>
                <div className="banner-content">
                  <h4 className="subtitle">
                    <span>
                      <img src={whiteHand4} alt="whiteHand4" />
                    </span>{" "}
                    Learn More. Earn More. Succeed Smarter.
                  </h4>
                  <h1 className="title text-anime-style-3">
                    Study Effectively in Online Learning
                  </h1>
                  <p className="para pb-32">
                    Build your future with Metsbab Services—flexible online
                    learning, career-focused diplomas, and access to 30+
                    colleges in just over 50 weeks.
                  </p>
                  <div className="btn-flex-area">
                    <div className="btn-area4">
                      <Link to="/contactus" className="header-btn1">
                        Enroll Now{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                    <div className="vl-video-play">
                      <a
                        href="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1312641740536048%2F&show_text=false&width=560&t=0"
                        className="glightbox video-play-button video popup-video"
                        tabIndex={-1}
                      >
                        <span />
                      </a>
                      <div className="video-text">
                        <h6 className="vtitle video">
                          <a
                            className="glightbox vtitle video popup-video"
                            href="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1312641740536048%2F&show_text=false&width=560&t=0"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <div className="vl-banner-thumb">
                  <img
                    className="w-100 img-fluid"
                    src={thumb11}
                    alt="thumb11"
                  />
                </div>
              </Col>
            </Row>
          </GlightBox>
        </Container>
      </div>

      <div className="vl-banner4">
        <Container>
          <GlightBox>
            <Row>
              <Col lg={6}>
                <div className="banner-content">
                  <h4 className="subtitle">
                    <span>
                      <img src={whiteHand4} alt="whiteHand4" />
                    </span>{" "}
                    Learn More. Earn More. Succeed Smarter.
                  </h4>
                  <h1 className="title text-anime-style-3">
                    Study Effectively in Online Learning
                  </h1>
                  <p className="para pb-32">
                    Build your future with Metsbab Services—flexible online
                    learning, career-focused diplomas, and access to 30+
                    colleges in just over 50 weeks.
                  </p>
                  <div className="btn-flex-area">
                    <div className="btn-area4">
                      <Link to="/contactus" className="header-btn1">
                        Enroll Now{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                    <div className="vl-video-play">
                      <a
                        href="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1312641740536048%2F&show_text=false&width=560&t=0"
                        className="glightbox video-play-button video popup-video"
                        tabIndex={-1}
                      >
                        <span />
                      </a>
                      <div className="video-text">
                        <h6 className="vtitle video">
                          <a
                            className="glightbox vtitle video popup-video"
                            href="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1312641740536048%2F&show_text=false&width=560&t=0"
                          >
                            Learn More
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <div className="vl-banner-thumb">
                  <img
                    className="w-100 img-fluid"
                    src={thumb11}
                    alt="thumb11"
                  />
                </div>
              </Col>
            </Row>
          </GlightBox>
        </Container>
      </div>
    </Slider>
  );
};
export default Hero;
