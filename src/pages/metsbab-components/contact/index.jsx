import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import Select from "react-select";
const options = [
  {
    value: "",
    label: "Donation To",
  },
  {
    value: 1,
    label: "Health and Medical Support",
  },
  {
    value: 2,
    label: "Education and Training",
  },
  {
    value: 3,
    label: "Relief and Aid Services",
  },
  {
    value: 4,
    label: "Community Development",
  },
  {
    value: 5,
    label: "Environmental Conservation",
  },
];
const Contact = () => {
  return (
    <section className="vl-contact-section-inner sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6} className="mb-30">
            <div className="vl-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13144.459118636094!2d-113.95801057573186!3d51.06571323917659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b349bf4e189%3A0x21bf5a0a84399556!2sMarbank%20Dr%20NE%2C%20Calgary%2C%20AB%2C%20Canada!5e1!3m2!1sen!2sph!4v1756648491880!5m2!1sen!2sph"
                allowFullScreen
                className="vl-contact-maps"
              />
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="vl-section-content ml-50">
              <div className="section-title">
                {/* <h4 className="subtitle">Contact Us</h4> */}
                <h2 className="title">Get in Touch with Us</h2>
                <p className="para pb-32">
                  Have questions or ready to start your journey? Our team is
                  here to help! Reach out today and take the next step toward
                  your career goals.
                </p>
              </div>
              <div className="vl-form-inner">
                <form action="#">
                  <Row>
                    <Col lg={6}>
                      <input type="text" placeholder="First Name*" />
                    </Col>
                    <Col lg={6}>
                      <input type="text" placeholder="Last Name*" />
                    </Col>
                    <Col lg={12}>
                      <input type="email" placeholder="Email Address*" />
                    </Col>

                    <Col lg={12}>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="How can we help you?*"
                        defaultValue={""}
                      />
                    </Col>
                    <Col lg={12}>
                      <div className="btn-area">
                        <button className="header-btn1">
                          Send Now{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
