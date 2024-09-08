import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"

import Faq from "../components/Faq";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate} from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      
        {/* header */}
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center pt-lg-5">
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

        {/* kelas terbaru */}
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
            <Row>
              <Col>
              <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/kelas")}>Lihat Semua Kelas
              <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Testimonial */}
        <div className="testimonial py-5">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center fw-bold my-5">Testimonial</h1>
              </Col>
            </Row>
            <Row>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {dataSwiper.map((data) => {
                  return (
                    <SwiperSlide key={data.id} className="shadow-sm">
                      <p className="desc">{data.desc}</p>
                      <div className="people">
                        <img src={data.image} alt="" />
                        <div>
                          <h5 className="mb-1">{data.name}</h5>
                          <p className="m-0 fw-bold">{data.skill}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Row>
          </Container>
        </div>

        {/* Faq Component */}
        <Faq />
    </div>
  )
}

export default HomePage