import { Container, Row, Col } from "react-bootstrap"
import { semuaKelas } from "../data/index";

import Faq from "../components/Faq";

const KelasPage = () => {
  return (
    <div className="kelaspage">

      {/* semua kelas */}
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Semua Kelas</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, ipsa.</p>
            </Col>
          </Row>
          <Row>
          {semuaKelas.map((kelas) =>{
                return <Col key={kelas.id} className="shadow rounded">
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
        </Container>
      </div>

      {/* Faq Component */}
      <Faq />
    </div>
  )
}

export default KelasPage