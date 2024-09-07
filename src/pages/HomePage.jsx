import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"

import { kelasTerbaru } from "../data/index";
import { useNavigate} from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6">
                <h1 className="mb-4 ">Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami</h1>
                <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, voluptates nemo voluptatum officia pariatur minima.</p>
                <button className="btn btn-danger btn-lg rounded-1 me-2">Lihat Kelas</button>
                <button className="btn btn-outline-danger btn-lg rounded-1">Lihat Promo</button>
              </Col>
              <Col lg="6">
                <img src={HeroImage} alt="hero-img" />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="kelas w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold">Kelas Terbaru</h1>
                <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur.</p>
              </Col>
            </Row>
            <Row>
              {kelasTerbaru.map((kelas) =>{
                return <Col key={kelas.id}>
                    <img src={kelas.image} alt="unspalsh.com" className="rounded-top mb-5"/>
                    <div className="star mb-2 px-3">
                      <i className={kelas.star1}></i>
                      <i className={kelas.star2}></i>
                      <i className={kelas.star3}></i>
                      <i className={kelas.star4}></i>
                      <i className={kelas.star5}></i>
                    </div>
                    <h5 className="mb-5 px-3">{kelas.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                      <button className="btn btn-danger rounded1">{kelas.buy}</button>
                    </div>
                  </Col>;
              })}
            </Row>
            <Row>
              <Col>
              <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/kelas")}>Lihat Semua Kelas
              <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default HomePage