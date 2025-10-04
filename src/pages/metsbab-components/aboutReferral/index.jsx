import thumb1 from "@/assets/img/choose/ref1.svg";
import thumb2 from "@/assets/img/choose/ref2.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const AboutReferral = () => {
  return (
    <section id="WhyChooseUs" className="vl-choose5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-choose-content mb-30">
              <div className="vl-section-title5">
                {/* <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Why Choose Us
                </h5> */}
                <h2 className="title text-anime-style-3">
                  Earn up to $1,000 CAD with the Metsbab Referral Program!
                </h2>
                <p
                  className="para"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  At Metsbab Services, we believe good friends deserve great
                  rewards! If you know someone who’s ready to start their study
                  journey in Canada, refer them to us — and you can earn up to
                  $1,000 CAD for every successful student enrollment!
                </p>
              </div>
            </div>
            <Row>
              <Col
                lg={6}
                md={6}
                data-aos="zoom-in-up"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="vl-icon-box mb-30">
                  {/* <div className="icon">
                    <span>
                      <img src={vlIcon1} alt="vlIcon1" />
                    </span>
                  </div> */}
                  <div className="content">
                    <Link to="#" className="title">
                      Step1: Refer & Enroll
                    </Link>
                    <p className="para">
                      Fill out our Referral Form below with you and your
                      friend’s name — once they enroll through Metsbab, your
                      referral is confirmed!
                    </p>
                    {/* <Link to="/pages/service" className="readmore">
                      Read More{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link> */}
                  </div>
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                data-aos="zoom-in-up"
                data-aos-duration={1100}
                data-aos-delay={300}
              >
                <div className="vl-icon-box mb-30">
                  {/* <div className="icon">
                    <span>
                      <img src={vlIcon2} alt="vlIcon2" />
                    </span>
                  </div> */}
                  <div className="content">
                    <Link to="#" className="title">
                      Step2: Get Rewarded
                    </Link>
                    <p className="para">
                      Receive your cash bonus of up to $1,000 CAD as a thank-you
                      for helping someone take their first step toward studying
                      in Canada!
                    </p>
                    {/* <Link to="/pages/service" className="readmore">
                      Read More{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <div className="single-thumb-box ml-50">
              {/* <div className="box-icon">
                <Link to="/about">
                  <span>
                    <img src={chooseUpArrow} alt="chooseUpArrow" />
                  </span>
                </Link>
              </div> */}
              <Row>
                <Col lg={6} md={6}>
                  <div className="single-thmb mb-30 reveal">
                    <img className="w-100" src={thumb1} alt="thumb1" />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="single-thmb2 mb-30 reveal">
                    <img className="w-100" src={thumb2} alt="thumb2" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AboutReferral;
