import thumb1 from "@/assets/img/metsbab/about/abt2.svg";
import thumb2 from "@/assets/img/metsbab/about/abt3.svg";
import thumb3 from "@/assets/img/metsbab/about/abt1.svg";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const About = () => {
  return (
    <section id="about" className="vl-about5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title5 mb-40">
                <h2 className="title text-anime-style-3">
                  Empowering Students. Building Futures.
                </h2>
                <p
                  className="para"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  At Metsbab Services, we believe education knows no borders. We
                  work hand-in-hand with colleges across Canada and beyond,
                  helping students from diverse nationalities achieve their
                  academic goals. With a foundation built on honesty and care,
                  our mission is to make quality education accessible to
                  everyone — empowering students to learn, grow, and succeed
                  wherever life takes them.
                </p>
              </div>
              <div className="vl-sm-thumb mb-30 reveal">
                <img className="w-100" src={thumb1} alt="thumb1" />
              </div>
              <div className="vl-sm-thumb2 mb-30 reveal">
                <img className="w-100" src={thumb2} alt="thumb2" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content2 ml-20 reveal">
              <div className="large-thumb mb-30">
                <img className="w-100" src={thumb3} alt="thumb3" />
              </div>
              <div className="content mb-30">
                <p
                  className="para"
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  We believe that every student deserves the chance to dream big
                  and achieve more. Through personalized guidance and continuous
                  support
                </p>
                <div
                  className="icon-list-box"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <ul>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Unlock Your Potential
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Embrace New Opportunities
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Achieve Success Beyond Borders
                    </li>
                  </ul>
                </div>
                <div
                  className="btn5"
                  data-aos="fade-left"
                  data-aos-duration={1100}
                  data-aos-delay={300}
                >
                  <Link to="/contactus" className="btn-priamry1">
                    Enroll Now!{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
