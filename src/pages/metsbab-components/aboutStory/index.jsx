import thumb1 from "@/assets/img/metsbab/about/abt5.svg";
import thumb2 from "@/assets/img/metsbab/about/abt6.svg";
import thumb3 from "@/assets/img/metsbab/about/abt4.svg";
import thumb4 from "@/assets/img/metsbab/about/abt7.svg";
import thumb8 from "@/assets/img/metsbab/about/abt8.svg";
import { Col, Container, Row } from "react-bootstrap";
const AboutStory = () => {
  return (
    <section id="about" className="vl-about5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title5 mb-40">
                <h2 className="title text-anime-style-3">
                  Our Story: A Journey of Passion and Purpose
                </h2>
                <p
                  className="para"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  The journey of Metsbab Services began with{" "}
                  <strong style={{ color: "#EF3F4C" }}>
                    Mr. Dan Dingal Jr.
                  </strong>
                  , a Filipino entrepreneur who immigrated to Canada at just 19
                  years old. Experiencing firsthand the challenges of building a
                  career without a Canadian diploma, he was inspired to create a
                  way for others to achieve the success he once struggled to
                  find.
                </p>
              </div>
              <div className="vl-sm-thumb mb-30 reveal">
                <img className="w-100" src={thumb1} alt="thumb1" />
              </div>
              <div className="vl-sm-thumb2 mb-30 reveal">
                <img className="w-100" src={thumb2} alt="thumb2" />
              </div>
              <div className="large-thumb mb-30">
                <img className="w-100" src={thumb8} alt="thumb2" />
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
                  Driven by this vision, Metsbab Marketing Services was founded
                  — a platform built to guide and empower students in pursuing
                  quality education and meaningful career opportunities. Today,
                  Metsbab continues to embody that same passion and purpose:
                  helping students unlock their potential and reach new heights
                  across the globe.
                </p>
              </div>
              <div className="large-thumb mb-30">
                <img className="w-100" src={thumb4} alt="thumb3" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AboutStory;
