import aboutImg1 from "@/assets/img/metsbab/home/about1.svg";
import aboutImg2 from "@/assets/img/metsbab/home/about2.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const About = () => {
  return (
    <section id="about" className="vl-about4 sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6}>
            <div className="vl-about-thumb mb-30">
              <Row className="">
                <Col lg={6} md={6}>
                  <div className="thumb-1 mb-30 reveal">
                    <img
                      className="w-100 img-fluid"
                      src={aboutImg1}
                      alt="aboutImg1"
                    />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="thumb-2">
                    <img
                      className="thmb2 reveal w-100"
                      src={aboutImg2}
                      alt="aboutImg2"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content mb-30 ml-50">
              <div className="vl-section-title4">
                <h5
                  className="subtitle"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  About Metsbab!
                </h5>
                <h2 className="title text-anime-style-3">
                  Empowering Students, Building Futures
                </h2>
                <p
                  className="para pb-32"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  At Metsbab Services, we go beyond marketing — we’re a trusted
                  partner guiding students toward meaningful career paths. With
                  partnerships across 30 colleges, we offer opportunities built
                  on honesty, integrity, and care. We welcome students from all
                  nationalities and backgrounds, fostering an inclusive space
                  where every learner feels supported and inspired to succeed.
                </p>
              </div>
              <Row className="">
                <Col
                  lg={12}
                  md={6}
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  <div className="vl-about-icon-box mb-30">
                    <div className="vl-icon-content">
                      <h3 className="title">
                        <Link to="/">Building Strong Partnerships</Link>
                      </h3>
                      <p>
                        By working hand in hand with colleges and institutions,
                        we strengthen opportunities for students. Our
                        partnerships ensure access to quality programs, career
                        placements, and networks that empower learners to reach
                        their full potential.
                      </p>
                    </div>
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
export default About;
