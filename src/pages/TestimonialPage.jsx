import { Container, Row, Col } from "react-bootstrap"
import { testimonial } from "../data/index";

import Faq from "../components/Faq";

const TestimonialPage = () => {
  return (
    <div className="testimonialpage">

      {/* testimonial */}
      <div className="testimonial  min-vh-100">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="fw-bold text-center">Semua Testimonial</h1>
              <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, numquam?</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5">
                  <p className="desc shadow p-2">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      {/* Faq Component */}
      <Faq />
    </div>
  )
}

export default TestimonialPage