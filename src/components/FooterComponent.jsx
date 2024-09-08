import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">AyoNgoding</h3>
            <p className="desc">Thank you for visiting this dummy website, don't forget to visit my LinkedIn and Instagram!</p>
            <div className="no mb-1 mt-4">
              <a href="https://fattanportofolio.framer.website/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="fa-solid fa-globe"></i>
                <p className="m-0">Fattan Portfolio Website</p>
              </a>
            </div>
            <div className="mail">
              <a href="mailto:fattanhibrizi@gmail.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">fattanhibrizi@gmail.com</p>
              </a>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="SnK">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3"> Subscribe untuk info menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="subscribe..." />
              <button className="btn btn-danger rounded-end rounded-0"> Subscribe </button>
            </div>
            <div className="social mt-3">
              <a href="https://www.linkedin.com/in/mohammad-fattan-hibrizi/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/fxttn05" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.youtube.com/@Fattan20" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://wa.me/6281213521066" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className=" text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} By <span className="fw-bold copyright"><a href="https://github.com/fxttn05" target="_blank" rel="noopener noreferrer">Fattan Hibrizi</a></span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent