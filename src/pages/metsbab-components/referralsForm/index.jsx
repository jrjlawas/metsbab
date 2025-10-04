import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ReferralForm = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });
  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type });
  };
  const serviceID = "service_xzmsvz5";
  const templateID = "template_if3snzf";
  const publicKey = "o3abIXSbb3C6L3DKP";
  const now = new Date();
  const dateTime = now.toLocaleString();

  const [formData, setFormData] = useState({
    FIRSTNAME: "",
    LASTNAME: "",
    EMAILADDRESS: "",
    PHONENUMBER: "",
    FRIENDFIRSTNAME: "",
    FRIENDLASTNAME: "",
    FRIENDEMAILADDRESS: "",
    FRIENDPHONENUMBER: "",
  });

  const templateParams = {
    name: formData.FIRSTNAME + ", " + formData.LASTNAME,
    client_email: "admissionsadvisormetsbab0@gmail.com",
    glotti_email: "jay.romel.lawas@glottii.com",
    client_name: "Metsbab Services",
    sender_name: "Metsbab Mailer",
    title: "Website Visitor Referrals",
    time: dateTime,
    message: `
    First Name: ${formData.FIRSTNAME}
    Last Name: ${formData.LASTNAME}
    Email Address: ${formData.EMAILADDRESS}
    Phone Number: ${formData.PHONENUMBER}
    Friend First Name: ${formData.FRIENDFIRSTNAME}
    Friend Last Name: ${formData.FRIENDLASTNAME}
    Friend Email Address: ${formData.FRIENDEMAILADDRESS}
    Friend Phone Number: ${formData.FRIENDPHONENUMBER}
  `,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (
        !formData.FIRSTNAME ||
        !formData.LASTNAME ||
        !formData.EMAILADDRESS ||
        !formData.PHONENUMBER ||
        !formData.FRIENDFIRSTNAME ||
        !formData.FRIENDLASTNAME ||
        !formData.FRIENDEMAILADDRESS ||
        !formData.FRIENDPHONENUMBER
      ) {
        showAlert("Please fill out all fields before sending.", "error");
        setLoading(false);
        return;
      }

      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        (response) => {
          setFormData({
            FIRSTNAME: "",
            LASTNAME: "",
            EMAILADDRESS: "",
            PHONENUMBER: "",
            FRIENDFIRSTNAME: "",
            FRIENDLASTNAME: "",
            FRIENDEMAILADDRESS: "",
            FRIENDPHONENUMBER: "",
          });
          showAlert(
            "Thank you for reaching out to Metsbab Services! We’ve received your referrals and will get in touch soon to confirm.",
            "success"
          );
          setLoading(false);
        },
        (error) => {
          showAlert(
            "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
            "error"
          );
        }
      );
    } catch (error) {
      showAlert(
        "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
        "error"
      );
    }
  };

  return (
    <section className="vl-contact-section-inner sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={12} className="mb-30">
            <div className="vl-section-content ml-50">
              <div className="section-title">
                {/* <h4 className="subtitle">Contact Us</h4> */}
                <h2 className="title">Submit your referral here</h2>
                {/* <p className="para pb-32">
                  Have questions or ready to start your journey? Our team is
                  here to help! Reach out today and take the next step toward
                  your career goals.
                </p> */}
              </div>
              <div className="vl-form-inner">
                <form action="#">
                  <Row>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="FIRSTNAME"
                        onChange={handleChange}
                        value={formData.FIRSTNAME}
                        placeholder="Your First Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="LASTNAME"
                        onChange={handleChange}
                        value={formData.LASTNAME}
                        placeholder="Your Last Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="EMAILADDRESS"
                        onChange={handleChange}
                        value={formData.EMAILADDRESS}
                        placeholder="Your Email Address*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="PHONENUMBER"
                        onChange={handleChange}
                        value={formData.PHONENUMBER}
                        placeholder="Your Phone Number*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="FRIENDFIRSTNAME"
                        onChange={handleChange}
                        value={formData.FRIENDFIRSTNAME}
                        placeholder="Your Friend's First Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="FRIENDLASTNAME"
                        onChange={handleChange}
                        value={formData.FRIENDLASTNAME}
                        placeholder="Your Friend's Last Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="FRIENDEMAILADDRESS"
                        onChange={handleChange}
                        value={formData.FRIENDEMAILADDRESS}
                        placeholder="Your Friend's Email Address*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="FRIENDPHONENUMBER"
                        onChange={handleChange}
                        value={formData.FRIENDPHONENUMBER}
                        placeholder="Your Friend's Phone Number*"
                      />
                    </Col>
                    <Col lg={12}>
                      {alert.visible && (
                        <div className={`alert-box ${alert.type}`}>
                          {alert.message}
                        </div>
                      )}

                      <br />
                    </Col>
                    <Col lg={12}>
                      <div className="btn-area4">
                        <button
                          type="button"
                          className="header-btn1 testimonial-btn4 testibtn4"
                          onClick={handleSubmit}
                        >
                          {loading ? (
                            <>
                              Submitting..
                              <span className="spinner"></span>
                            </>
                          ) : (
                            <>
                              Submit Now{" "}
                              <span>
                                <FaArrowRight />
                              </span>
                            </>
                          )}
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
export default ReferralForm;
