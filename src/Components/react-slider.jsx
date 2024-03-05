import React from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.less';

// SwiperCore.use([Navigation]);

const Portfolio = () => {
  return (
    <div className="portfolio_dinesh">
      <div className="testimonial-prev">
        <i className="bi bi-arrow-left"></i>
      </div>
      <div className="testimonial-next">
        <i className="bi bi-arrow-right"></i>
      </div>
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: '.testimonial-next',
          prevEl: '.testimonial-prev',
        }}
      >
        <SwiperSlide>
          <div className="swiper-slide dineshwidth">
            <div className="portfolio-item dineshwidth12">
              <div
                className="portfolio-image dineshImage"
                data-bg-image="assets/images/portfolio/portfolio-1.jpg"
              ></div>
              <div className="portfolio-content">
                <h4 className="title">
                  <a href="#">Bradley</a>
                </h4>
                <span className="sub-title">Cement, Petrochemical</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide dineshwidth">
            <div className="portfolio-item dineshwidth12">
              <div
                className="portfolio-image dineshImage12"
                data-bg-image="assets/images/portfolio/portfolio-2.jpg"
              ></div>
              <div className="portfolio-content">
                <h4 className="title">
                  <a href="#">Aurthur Barry</a>
                </h4>
                <span className="sub-title">Sugar, Distillery</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide dineshwidth">
            <div className="portfolio-item dineshwidth12">
              <div
                className="portfolio-image dineshImage13"
                data-bg-image="assets/images/portfolio/portfolio-3.jpg"
              ></div>
              <div className="portfolio-content">
                <h4 className="title">
                  <a href="#">Louis Miller</a>
                </h4>
                <span className="sub-title">Sugar, Petrochemical</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide dineshwidth">
            <div className="portfolio-item dineshwidth12">
              <div
                className="portfolio-image dineshImage14"
                data-bg-image="assets/images/portfolio/portfolio-4.jpg"
              ></div>
              <div className="portfolio-content">
                <h4 className="title">
                  <a href="#">Grey George</a>
                </h4>
                <span className="sub-title">Sugar, Cement</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
