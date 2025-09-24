import { blogData } from "./data";
import calenderImg from "@/assets/img/icons/vl-calender-1.1.svg";
import userImg from "@/assets/img/icons/vl-user-1.1.svg";
import { Link } from "react-router";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";

const Programs = () => {
  return (
    <section className="vl-blog-inner sp2">
      <Container>
        <Row>
          <div className="vl-event-content-area">
            <div className="event-content-area">
              <h2 className="title">Explore Our Programs</h2>
              <p className="para">
                At Metsbab Services, we provide quality education designed to
                take you from enrollment to employment. With your future as our
                priority, our programs empower individuals to succeed
                academically and professionally.
              </p>
            </div>
            <br></br>
          </div>

          {blogData?.map((item, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="vl-single-blg-item mb-30">
                <div className="vl-blg-thumb">
                  <Link to="/">
                    <img className="w-100" src={item.image} alt="img" />
                  </Link>
                </div>
                <div className="vl-blg-content">
                  <h3 className="title">
                    <Link to="/">{item.title}</Link>
                  </h3>
                  <p>{item.excerpt}</p>
                  <Link to="/" className="read-more">
                    View Programs{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Programs;
