import React from "react";
import Pic1 from "../Assets/images/logos/primary-logo.png";
import Pic2 from "../Assets/images/shapes/about-image-shape2.svg"
import Pic3 from "../Assets/images/shapes/circle-shape.svg"
import Pic4 from "../Assets/images/about/about-2.jpg"
import Pic5 from "../Assets/images/about/about-1.jpg"
import Pic6 from "../Assets/images/shapes/about-right-shape.svg"
import Pic7 from "../Assets/images/shapes/about-left-shape.svg"
import Pic8 from "../Assets/images/shapes/service-left-shape.svg"
import Pic9 from "../Assets/images/shapes/service-item-shape.svg"
import Pic10 from "../Assets/images/steps/steps-1.jpg"
import Pic11 from "../Assets/images/shapes/steps-right-shape.svg"
import Pic12 from "../Assets/images/steps/steps-2.jpg"
// <!-- CSS here -->
//       <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
//       <link rel="stylesheet" href="assets/css/font-awesome-pro.min.css" />
//       <link rel="stylesheet" href="assets/css/flaticon_indupress.css" />
//       <link rel="stylesheet" href="assets/css/odometer.min.css" />
//       <link rel="stylesheet" href="assets/css/magnific-popup.css" />
//       <link rel="stylesheet" href="assets/css/swiper.min.css" />
//       <link rel="stylesheet" href="assets/css/backToTop.css" />
//       <link rel="stylesheet" href="assets/css/nice-select.css" />
//       <link rel="stylesheet" href="assets/css/meanmenu.css" />
//       <link rel="stylesheet" href="assets/css/main.css" />

const Home = () => {
  return (
    <>
      {/* <!-- start: Header Area --> */}
      <header class="tj-header-area header-1">
        <div class="header-topbar">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="header-topbar-content">
                  <div class="header-socials">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="bi bi-twitter-x"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="bi bi-facebook"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="header-contact-infos">
                    <ul>
                      {/* <li><i class="flaticon-pin"></i><span>27/4 Emirates-United States</span></li> */}
                      <li>
                        <i class="bi bi-geo-alt"></i>
                        <span>27/4 Emirates-United States</span>
                      </li>
                      {/* <li><i class="flaticon-old-typical-phone"></i><a href="tel:(+1)-12345678900">(+1)-123 456 789 00</a></li> */}
                      <li>
                        <i class="bi bi-telephone-inbound"></i>
                        <a href="tel:(+1)-12345678900">(+1)-123 456 789 00</a>
                      </li>
                      {/* <li><i class="flaticon-letter"></i><a href="mailto:mail@indupress.com">mail@indupress.com</a></li> */}
                      <li>
                        <i class="bi bi-envelope"></i>
                        <a href="mailto:mail@indupress.com">
                          mail@indupress.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mainmenu-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="mainmenu-wrapper">
                  <div class="site-logo">
                    <a class="logo" href="index.html">
                      <img src={Pic1} alt="Logo" />
                      {/* <img src="assets/images/logos/primary-logo.png" alt="Logo" /> */}
                    </a>
                  </div>
                  <div class="mainmenu main-mobile-menu d-none d-lg-inline-block">
                    <ul>
                      <li class="has-dropdown current-menu-item">
                        <a href="index.html">Home</a>
                        <ul class="sub-menu">
                          <li class="current-menu-item">
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li class="has-dropdown">
                        <a href="service.html">Services</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-dropdown">
                        <a href="javascript:void(0)">Pages</a>
                        <ul class="sub-menu">
                          <li class="has-dropdown">
                            <a href="project.html">Projects</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="project.html">Projects</a>
                              </li>
                              <li>
                                <a href="project-details.html">
                                  Project Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="price.html">Pricing Plan</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-dropdown">
                        <a href="blog.html">Blog</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div class="mainmenu-right">
                    <div class="header-search d-none d-xl-inline-block">
                      <button class="search">
                        {/* <i class="fa-light fa-magnifying-glass"></i> */}
                        <i class="bi bi-search"></i>
                      </button>
                    </div>
                    <div class="header-button d-none d-md-inline-block">
                      {/* <a class="tj-primary-btn" href="contact.html">Request a Quote <i class="fa-light fa-arrow-right-from-line"></i></a> */}
                      <a class="tj-primary-btn" href="contact.html">
                        Request a Quote <i class="bi bi-arrow-bar-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="menu-bar d-lg-none">
                    <button>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header class="tj-header-area header-sticky header-1">
        <div class="mainmenu-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="mainmenu-wrapper">
                  <div class="site-logo">
                    <a class="logo" href="index.html">
                      <img
                        src="assets/images/logos/primary-logo.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div class="mainmenu d-none d-lg-inline-block">
                    <ul>
                      <li class="has-dropdown current-menu-item">
                        <a href="index.html">Home</a>
                        <ul class="sub-menu">
                          <li class="current-menu-item">
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li class="has-dropdown">
                        <a href="service.html">Services</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-dropdown">
                        <a href="javascript:void(0)">Pages</a>
                        <ul class="sub-menu">
                          <li class="has-dropdown">
                            <a href="project.html">Projects</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="project.html">Projects</a>
                              </li>
                              <li>
                                <a href="project-details.html">
                                  Project Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="price.html">Pricing Plan</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-dropdown">
                        <a href="blog.html">Blog</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div class="mainmenu-right">
                    <div class="header-search d-none d-xl-inline-block">
                      <button class="search">
                        <i class="fa-light fa-magnifying-glass"></i>
                      </button>
                    </div>
                    <div class="header-button d-none d-md-inline-block">
                      <a class="tj-primary-btn" href="contact.html">
                        Request a Quote{" "}
                        <i class="fa-light fa-arrow-right-from-line"></i>
                      </a>
                    </div>
                  </div>
                  <div class="menu-bar d-lg-none">
                    <button>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="primary" class="site-main">
        {/* <!-- start: Hero Section --> */}
        <section
          class="tj-hero-section"
          data-bg-image="assets/images/slider/slider-1.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="hero-content">
                  <h4 class="sub-title">
                    Unlimited Inventiveness
                    <span class="subtitle_shape"></span>
                  </h4>
                  <h1 class="sec-title">We are the Delivering</h1>
                  <h2 class="type-text">
                    High-Quality <span class="text">Services</span>
                  </h2>
                  <div class="desc">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      even slightly believable.
                    </p>
                  </div>
                  <div class="hero-button">
                    <a class="tj-light-button" href="contact.html">
                      Read More{" "}
                      <i class="fa-light fa-arrow-right-from-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- vertical lines start --> */}
          <div class="vertical-lines-wrapper"></div>
          {/* <!-- vertical lines end --> */}
        </section>
        {/* <!-- end: Hero Section --> */}

        {/* <!-- start: About Section --> */}
        <section class="tj-about-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-7 col-12 order-2 order-xl-1">
                <div class="about-content">
                  <div class="tj-heading-area">
                    <h4 class="sub-title">
                      About Our Company
                      <span class="section-sub-title-shape"></span>
                    </h4>
                    <h2 class="sec-title">
                      Quality Manufacturing <span>Is Our Objective</span>
                    </h2>
                    <div class="desc">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a text.
                      </p>
                    </div>
                  </div>
                  <div class="about-feature-item">
                    <div class="feature-item">
                      <div class="feature-icon">
                      <i class="bi bi-award-fill"></i>
                        {/* <i class="flaticon-quality"></i> */}
                      </div>
                      <div class="feature-text">
                        <span class="feature-title">ISO Certified</span>
                        <h4 class="title">Manufacturers</h4>
                        <p>ISO 9022:235</p>
                      </div>
                    </div>
                    <div class="feature-item">
                      <div class="feature-icon">
                      <i class="bi bi-envelope"></i>
                        {/* <i class="flaticon-nanotechnology"></i> */}
                      </div>
                      <div class="feature-text">
                        <span class="feature-title">High Tech</span>
                        <h4 class="title">Manufacturers</h4>
                        <p>In Europe</p>
                      </div>
                    </div>
                  </div>
                  <div class="feature-contact">
                    <div class="about-button">
                      <a class="tj-primary-btn" href="about.html">
                        Read More{" "}
                        <i class="bi bi-arrow-bar-right"></i>
                        {/* <i class="fa-light fa-arrow-right-from-line"></i> */}
                      </a>
                    </div>
                    <div class="contact-content">
                      <div class="contact-icon">
                        <i class="bi bi-telephone-inbound"></i>
                        {/* <i class="flaticon-old-typical-phone"></i> */}
                      </div>
                      <div class="contact-text">
                        <span>Call Us Anytime</span>
                        <a class="link" href="tel:+00123456789">
                          + 00-123-456-789
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-12 order-1 order-xl-2">
                <div class="about-images">
                  <div class="about-circle">
                    <svg
                      class="rotate-image"
                      viewBox="0 0 140 100"
                      width="150"
                      height="150"
                    >
                      <defs>
                        <path
                          id="circle"
                          d="
                                              M 50, 50
                                              m -37, 0
                                              a 37,37 0 1,1 110,0
                                              a 37,37 0 1,1 -110,0"
                        />
                      </defs>
                      <text font-size="12">
                        <textPath xlinkHref="#circle" class="shape-1">
                          . MANUFACTURING . MANUFACTURING . MANUFACTURING
                        </textPath>
                      </text>
                    </svg>
                    <div class="circle-image">
                      <img
                        src={Pic3}
                        alt="Shape"
                      />
                    </div>
                  </div>
                  <div class="left-image">
                    <img src={Pic4} alt="Image" />
                  </div>
                  <div class="right-image">
                    <img src={Pic5} alt="Image" />
                  </div>
                  <div class="about-shape">
                    <img
                      src={Pic2}
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sec-left-shape">
            <img src={Pic7} alt="Shape" />
          </div>
          <div class="sec-right-shape">
            <img src={Pic6} alt="Shape" />
          </div>
        </section>
        {/* <!-- end: About Section --> */}
        {/* 
         <!-- start: Service Section --> */}
        <section
          class="tj-service-section"
          data-bg-image="assets/images/bg/service-bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="tj-heading-area">
                <h4 class="sub-title">
                  Our Services
                  <span class="section-sub-title-shape"></span>
                </h4>
                <h2 class="sec-title">
                  We Work To <span>Craft</span>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="swiper tj-service-slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="service-item">
                        <div class="service-icon">
                          <i class="flaticon-industrial"></i>
                        </div>
                        <span class="sub-title">Manufacturing</span>
                        <h3 class="title">
                          <a href="#">And Logistics</a>
                        </h3>
                        <div class="desc">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content.
                          </p>
                        </div>
                        <div class="service-hover-shape">
                          <img
                            src={Pic9}
                            alt="Shape"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="service-item">
                        <div class="service-icon">
                          <i class="flaticon-regulation"></i>
                        </div>
                        <span class="sub-title">Integration Of</span>
                        <h3 class="title">
                          <a href="#">New Technology</a>
                        </h3>
                        <div class="desc">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content.
                          </p>
                        </div>
                        <div class="service-hover-shape">
                          <img
                            src={Pic9}
                            alt="Shape"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="service-item">
                        <div class="service-icon">
                          <i class="flaticon-manufacture"></i>
                        </div>
                        <span class="sub-title">Personalised</span>
                        <h3 class="title">
                          <a href="#">End Products</a>
                        </h3>
                        <div class="desc">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content.
                          </p>
                        </div>
                        <div class="service-hover-shape">
                          <img
                            src={Pic9}
                            alt="Shape"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="service-section-shape">
            <img
              src={Pic8}
              alt="Shape"
            />
          </div>
        </section>
        {/* <!-- end: Service Section --> */}

        {/* <!-- start: Video Section --> */}
        <section
          class="tj-video-section"
          data-bg-image="assets/images/bg/video-bg.jpg"
        >
          <div class="tj-video-area">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="video-area">
                    <h2 class="title">Watching Video</h2>
                    <div class="video-box">
                      <a
                        class="popup-videos-button"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://www.youtube.com/watch?v=ADmQTw4qqTY"
                      >
                        <i class="bi bi-play-fill"></i>
                        {/* <i class="fa-solid fa-play"></i> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tj-counter-area">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="fun-fact-area">
                    <div class="counter-item">
                      <div class="tj-count">
                        <span class="odometer" data-count="4323">
                          0
                        </span>
                        +
                      </div>
                      <span class="sub-title">Years Experience</span>
                    </div>
                    <div class="counter-item">
                      <div class="tj-count">
                        <span class="odometer" data-count="476">
                          0
                        </span>
                        +
                      </div>
                      <span class="sub-title">Projects Completed</span>
                    </div>
                    <div class="counter-item">
                      <div class="tj-count">
                        <span class="odometer" data-count="539">
                          0
                        </span>
                        K
                      </div>
                      <span class="sub-title">Happy Customers</span>
                    </div>
                    <div class="counter-item">
                      <div class="tj-count">
                        <span class="odometer" data-count="39">
                          0
                        </span>
                        +
                      </div>
                      <span class="sub-title">Awards Milestones</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Video Section --> */}

        {/* <!-- start: Steps Section --> */}
        <section class="tj-steps-section">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="tab-content tabs-main-content">
                  <div
                    class="tab-pane fade show active"
                    id="step-1"
                    role="tabpanel"
                  >
                    <div class="row align-items-center">
                      <div class="col-lg-6 order-2 order-lg-1">
                        <div class="step-content">
                          <div class="tj-heading-area">
                            <h4 class="sub-title">
                              Development
                              <span class="section-sub-title-shape"></span>
                            </h4>
                            <h2 class="sec-title">
                              How We <span>Started</span>
                            </h2>
                          </div>
                          <div class="step-text">
                            <h3 class="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span class="sub-title">Indupress Brand Name</span>
                            <div class="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div class="steps-button">
                              <a class="tj-primary-btn" href="contact.html">
                                More Details{" "}
                                {/* <i class="bi bi-arrow-bar-right"></i> */}
                                <i class="fa-light fa-arrow-right-from-line"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 order-1 order-lg-2">
                        <div class="steps-images">
                          <div class="left-image">
                            <img
                              src={Pic10}
                              alt="Images"
                            />
                          </div>
                          <div class="right-image">
                            <img
                              src={Pic12}
                              alt="Images"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="step-2" role="tabpanel">
                    <div class="row align-items-center">
                      <div class="col-lg-6 order-2 order-lg-1">
                        <div class="step-content">
                          <div class="tj-heading-area">
                            <h4 class="sub-title">
                              Development
                              <span class="section-sub-title-shape"></span>
                            </h4>
                            <h2 class="sec-title">
                              Preparation of<span> Documents</span>
                            </h2>
                          </div>
                          <div class="step-text">
                            <h3 class="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span class="sub-title">Indupress Brand Name</span>
                            <div class="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div class="steps-button">
                              <a class="tj-primary-btn" href="#">
                                More Details{" "}
                                <i class="fa-light fa-arrow-right-from-line"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 order-1 order-lg-2">
                        <div class="steps-images">
                          <div class="left-image">
                            <img
                              src="assets/images/steps/steps-3.jpg"
                              alt="Images"
                            />
                          </div>
                          <div class="right-image">
                            <img
                              src={Pic12}
                              alt="Images"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="step-3" role="tabpanel">
                    <div class="row align-items-center">
                      <div class="col-lg-6 order-2 order-lg-1">
                        <div class="step-content">
                          <div class="tj-heading-area">
                            <h4 class="sub-title">
                              Development
                              <span class="section-sub-title-shape"></span>
                            </h4>
                            <h2 class="sec-title">
                              How We <span>Started</span>
                            </h2>
                          </div>
                          <div class="step-text">
                            <h3 class="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span class="sub-title">Indupress Brand Name</span>
                            <div class="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div class="steps-button">
                              <a class="tj-primary-btn" href="#">
                                More Details{" "}
                                <i class="fa-light fa-arrow-right-from-line"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 order-1 order-lg-2">
                        <div class="steps-images">
                          <div class="left-image">
                            <img
                              src="assets/images/steps/steps-1.jpg"
                              alt="Images"
                            />
                          </div>
                          <div class="right-image">
                            <img
                              src={Pic12}
                              alt="Images"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="step-4" role="tabpanel">
                    <div class="row align-items-center">
                      <div class="col-lg-6 order-2 order-lg-1">
                        <div class="step-content">
                          <div class="tj-heading-area">
                            <h4 class="sub-title">
                              Development
                              <span class="section-sub-title-shape"></span>
                            </h4>
                            <h2 class="sec-title">
                              Preparation of<span> Documents</span>
                            </h2>
                          </div>
                          <div class="step-text">
                            <h3 class="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span class="sub-title">Indupress Brand Name</span>
                            <div class="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div class="steps-button">
                              <a class="tj-primary-btn" href="#">
                                More Details{" "}
                                <i class="fa-light fa-arrow-right-from-line"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 order-1 order-lg-2">
                        <div class="steps-images">
                          <div class="left-image">
                            <img
                              src="assets/images/steps/steps-3.jpg"
                              alt="Images"
                            />
                          </div>
                          <div class="right-image">
                            <img
                              src={Pic12}
                              alt="Images"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="tabs-area" role="tablist">
                <button
                  class="step active"
                  data-bs-toggle="tab"
                  data-bs-target="#step-1"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <span class="number">1849</span>
                  <span class="line"></span>
                  <span class="title">Seed Stage</span>
                </button>
                <button
                  class="step"
                  data-bs-toggle="tab"
                  data-bs-target="#step-2"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span class="number">1949</span>
                  <span class="line"></span>
                  <span class="title">Seed Stage</span>
                </button>
                <button
                  class="step"
                  data-bs-toggle="tab"
                  data-bs-target="#step-3"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span class="number">2001</span>
                  <span class="line"></span>
                  <span class="title">Seed Stage</span>
                </button>
                <button
                  class="step"
                  data-bs-toggle="tab"
                  data-bs-target="#step-4"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span class="number">2023</span>
                  <span class="line"></span>
                  <span class="title">Seed Stage</span>
                </button>
              </div>
            </div>
          </div>
          <div class="steps-sec-left-shape">
            <img src="assets/images/shapes/steps-left-shape.svg" alt="Shape" />
          </div>
          <div class="steps-sec-right-shape">
            <img src={Pic11} alt="Shape" />
          </div>
        </section>
        {/* <!-- end: Steps Section --> */}

        {/* <!-- start: Analysis Section --> */}
        <section
          class="tj-analysis-section"
          data-bg-image="assets/images/bg/analysis-bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6"></div>
              <div class="col-lg-6">
                <div class="analysis-content">
                  <div class="tj-heading-area">
                    <h4 class="sub-title">
                      Analysis
                      <span class="section-sub-title-shape"></span>
                    </h4>
                    <h2 class="sec-title">
                      Implemetation <span>Analysis</span>
                    </h2>
                    <div class="desc">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        making it look like readable English.
                      </p>
                    </div>
                  </div>
                  <div class="analysis-list">
                    <ul class="dot-style">
                      <li>Elementum nibh tellis</li>
                      <li>Sed id semper risus in hendrert</li>
                    </ul>
                    <div class="analysis-button">
                      <a class="tj-primary-btn" href="contact.html">
                        More Details{" "}
                        <i class="fa-light fa-arrow-right-from-line"></i>
                      </a>
                    </div>
                  </div>
                  <div class="analysis-wrapper">
                    <h3 class="title">Measuring Information</h3>
                    <div class="desc">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                    <div class="analysis-chart">
                      <img src="assets/images/steps/chart.png" alt="Images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Analysis Section --> */}
        {/* 
         <!-- start: Price Section --> */}
        <section class="tj-price-section">
          <div class="container">
            <div class="row">
              <div class="tj-heading-area">
                <h4 class="sub-title">
                  Pricetable
                  <span class="section-sub-title-shape"></span>
                </h4>
                <h2 class="sec-title">
                  Choose a Plan That Perfect <span>Works For You</span>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="price-item">
                  <div class="top-content">
                    <h3 class="title">
                      Basic <span class="date">/month</span>
                    </h3>
                    <span class="price">59$</span>
                  </div>
                  <div class="check-list">
                    <ul class="dot-style">
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Blandit massa enim nec
                      </li>
                      <li class="style-2">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Orci dapibus ultrices in
                      </li>
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Elementum nisi eleifend
                      </li>
                      <li class="style-2">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Sed turpis tincidunt id
                      </li>
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Egestas congues quisqie
                      </li>
                    </ul>
                  </div>
                  <div class="price-button text-center">
                    <a class="tj-light-button" href="price.html">
                      Choose Plan{" "}
                      <i class="fa-light fa-arrow-right-from-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="price-item active-item">
                  <div class="top-content">
                    <h3 class="title">
                      Premium <span class="date">/month</span>
                    </h3>
                    <span class="price">75$</span>
                  </div>
                  <div class="check-list">
                    <ul class="dot-style">
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Blandit massa enim nec
                      </li>
                      <li class="style-2">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Orci dapibus ultrices in
                      </li>
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Elementum nisi eleifend
                      </li>
                      <li class="style-2">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Sed turpis tincidunt id
                      </li>
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Egestas congues quisqie
                      </li>
                    </ul>
                  </div>
                  <div class="price-button text-center">
                    <a class="tj-light-button" href="price.html">
                      Choose Plan{" "}
                      <i class="fa-light fa-arrow-right-from-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="price-item">
                  <div class="top-content">
                    <h3 class="title">
                      Standard <span class="date">/month</span>
                    </h3>
                    <span class="price">95$</span>
                  </div>
                  <div class="check-list">
                    <ul class="dot-style">
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Blandit massa enim nec
                      </li>
                      <li class="style-2">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Orci dapibus ultrices in
                      </li>
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Elementum nisi eleifend
                      </li>
                      <li class="style-2">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Sed turpis tincidunt id
                      </li>
                      <li class="style-1">
                        <span>
                          <i class="fa-light fa-check"></i>
                        </span>
                        Egestas congues quisqie
                      </li>
                    </ul>
                  </div>
                  <div class="price-button text-center">
                    <a class="tj-light-button" href="price.html">
                      Choose Plan{" "}
                      <i class="fa-light fa-arrow-right-from-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Price Section --> */}

        {/* <!-- start: Portfolio Section --> */}
        <section class="tj-portfolio-section">
          <div class="container">
            <div class="row">
              <div class="tj-heading-area">
                <h4 class="sub-title">
                  Project
                  <span class="section-sub-title-shape"></span>
                </h4>
                <h2 class="sec-title">
                  Recently Completed <span>Projects Gallery</span>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="swiper swiper-container tj-portfolio-slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="portfolio-item">
                        <div
                          class="portfolio-image"
                          data-bg-image="assets/images/portfolio/portfolio-1.jpg"
                        ></div>
                        <div class="portfolio-content">
                          <h4 class="title">
                            <a href="#">Bradley</a>
                          </h4>
                          <span class="sub-title">Cement, Petrochemical</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="portfolio-item">
                        <div
                          class="portfolio-image"
                          data-bg-image="assets/images/portfolio/portfolio-2.jpg"
                        ></div>
                        <div class="portfolio-content">
                          <h4 class="title">
                            <a href="#">Aurthur Barry</a>
                          </h4>
                          <span class="sub-title">Sugar, Distillery</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="portfolio-item">
                        <div
                          class="portfolio-image"
                          data-bg-image="assets/images/portfolio/portfolio-3.jpg"
                        ></div>
                        <div class="portfolio-content">
                          <h4 class="title">
                            <a href="#">Louis Miller</a>
                          </h4>
                          <span class="sub-title">Sugar, Petrochemical</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="portfolio-item">
                        <div
                          class="portfolio-image"
                          data-bg-image="assets/images/portfolio/portfolio-4.jpg"
                        ></div>
                        <div class="portfolio-content">
                          <h4 class="title">
                            <a href="#">Grey George</a>
                          </h4>
                          <span class="sub-title">Sugar, Cement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="portfolio-navigation">
                    <div class="testimonial-prev">
                      <i class="flaticon-right-arrow"></i>
                    </div>
                    <div class="testimonial-next">
                      <i class="flaticon-right-arrow"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-sec-top-shape">
            <img src="assets/images/shapes/project-top-shape.svg" alt="Shape" />
          </div>
          <div class="portfolio-sec-bottom-shape">
            <img
              src="assets/images/shapes/project-bottom-shape.svg"
              alt="Shape"
            />
          </div>
        </section>
        {/* <!-- end: Portfolio Section --> */}

        {/* <!-- start: Testimonial Section --> */}
        <section class="tj-testimonial-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-5"></div>
              <div class="col-lg-7">
                <div class="tj-heading-area">
                  <h4 class="sub-title">
                    Reviews
                    <span class="section-sub-title-shape"></span>
                  </h4>
                  <h2 class="sec-title">
                    Happy Clients <span>Thoughts</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="testimonial-wrapper">
                  <div class="row align-items-end">
                    <div class="col-lg-4 offset-lg-1">
                      <div class="swiper testimonial-auother-slider">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide testimonial-auother">
                            <div class="thumb-image">
                              <img
                                src="assets/images/testimonial/testimonial-1.png"
                                alt="Image"
                              />
                              <div class="quote-icon">
                                <img
                                  src="assets/images/icon/quote.svg"
                                  alt="Icon"
                                />
                              </div>
                            </div>
                            <div class="testimonial-name">
                              <h3 class="title">David,</h3>
                              <span class="sub-title">Desinger</span>
                            </div>
                            <div class="testimonial-info">
                              <div class="testimonial-rating">
                                <div class="star-ratings">
                                  {/* <div class="fill-ratings" style="width: 73%"> */}
                                  <div class="fill-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                  <div class="empty-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                </div>
                              </div>
                              <div class="testimonial-socials">
                                <ul class="dot-style">
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-x-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-whatsapp"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide testimonial-auother">
                            <div class="thumb-image">
                              <img
                                src="assets/images/testimonial/testimonial-1.png"
                                alt="Image"
                              />
                              <div class="quote-icon">
                                <img
                                  src="assets/images/icon/quote.svg"
                                  alt="Icon"
                                />
                              </div>
                            </div>
                            <div class="testimonial-name">
                              <h3 class="title">David,</h3>
                              <span class="sub-title">Desinger</span>
                            </div>
                            <div class="testimonial-info">
                              <div class="testimonial-rating">
                                <div class="star-ratings">
                                  {/* <div class="fill-ratings" style="width: 73%"> */}
                                  <div class="fill-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                  <div class="empty-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                </div>
                              </div>
                              <div class="testimonial-socials">
                                <ul class="dot-style">
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-x-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-whatsapp"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i class="fa-brands fa-facebook-f"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div class="swiper thumb-content-slider">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <div class="testimonial-content-slider">
                              <p>
                                ‘’There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.’’
                              </p>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="testimonial-content-slider">
                              <p>
                                ‘’There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.’’
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="testimonial-navigation">
                          <div class="testimonial-prev">
                            <i class="flaticon-right-arrow"></i>
                          </div>
                          <div class="testimonial-next">
                            <i class="flaticon-right-arrow"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-sec-top-shape">
            <img
              src="assets/images/shapes/testimonial-top-shape.svg"
              alt="Images"
            />
          </div>
          <div class="testimonial-sec-bottom-shape">
            <img
              src="assets/images/shapes/testimonial-bottom-shape.svg"
              alt="Images"
            />
          </div>
        </section>
        {/* <!-- end: Testimonial Section --> */}

        {/* <!-- start: Faq Section --> */}
        <section class="tj-faq-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="tj-heading-area">
                  <h4 class="sub-title">
                    Our Experts Answers
                    <span class="section-sub-title-shape"></span>
                  </h4>
                  <h2 class="sec-title">
                    Freqently Asked <span>Questions</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-7">
                <div class="accordion tj-faq" id="faqOne">
                  <div class="faq-item">
                    <button
                      class="faq-title"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-1"
                      aria-expanded="true"
                    >
                      1. What is the proce of industrial automation
                    </button>
                    <div
                      id="faq-1"
                      class="collapse show"
                      data-bs-parent="#faqOne"
                    >
                      <div class="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="faq-item">
                    <button
                      class="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-2"
                      aria-expanded="false"
                    >
                      2. How does production planning work?
                    </button>
                    <div id="faq-2" class="collapse" data-bs-parent="#faqOne">
                      <div class="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="faq-item">
                    <button
                      class="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-3"
                      aria-expanded="false"
                    >
                      3. What is the manufacturing sector’s function ?
                    </button>
                    <div id="faq-3" class="collapse" data-bs-parent="#faqOne">
                      <div class="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="faq-item">
                    <button
                      class="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-4"
                      aria-expanded="false"
                    >
                      4. What is the benefit of implementation industry ?
                    </button>
                    <div id="faq-4" class="collapse" data-bs-parent="#faqOne">
                      <div class="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="faq-item">
                    <button
                      class="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-5"
                      aria-expanded="false"
                    >
                      5. Where can i find information a robot in the industry ?
                    </button>
                    <div id="faq-5" class="collapse" data-bs-parent="#faqOne">
                      <div class="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <form>
                  <div class="contact-form-box">
                    <div class="contact-content">
                      <span class="sub-title">Contact Us</span>
                      <h3 class="title">Get a CallBack</h3>
                    </div>
                    <div class="form-input">
                      <input
                        type="text"
                        id="name"
                        name="yourName"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="form-input">
                      <input
                        type="email"
                        id="email"
                        name="yourEmail"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div class="form-input">
                      <input
                        type="tel"
                        id="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div class="form-input">
                      <input
                        type="text"
                        id="regular"
                        name="regular"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div class="form-input">
                      <textarea
                        name="country"
                        id="country"
                        placeholder="Country"
                      ></textarea>
                    </div>
                    <div class="submit-button">
                      <button class="tj-primary-btn">Sent Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Faq Section --> */}

        {/* <!-- start: Blog Section --> */}
        <section class="tj-blog-section">
          <div class="container">
            <div class="blog-top-content">
              <div class="tj-heading-area">
                <h4 class="sub-title">
                  News Feeds
                  <span class="section-sub-title-shape"></span>
                </h4>
                <h2 class="sec-title">
                  Blog & Insights <span>Professionals</span>
                </h2>
              </div>
              <div class="blog-desc">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="blog-item">
                  <div class="blog-image">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-1.jpg" alt="Images" />
                    </a>
                  </div>
                  <div class="blog-content">
                    <div class="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i class="flaticon-user"></i>
                          </span>{" "}
                          <a href="blog-details.html">Admin</a>
                        </li>
                        <li>
                          <span>
                            <i class="fa-solid fa-comments"></i>
                          </span>{" "}
                          Comments (1)
                        </li>
                      </ul>
                    </div>
                    <h4 class="title">
                      <a href="blog-details.html">
                        Then They Need To Establish a Company Branch
                      </a>
                    </h4>
                    <div class="blog-button">
                      <a class="tj-secondary-btn" href="blog-details.html">
                        Read More{" "}
                        <i class="fa-light fa-arrow-right-from-line"></i>
                      </a>
                    </div>
                  </div>
                  <div class="blog-date">
                    <span class="date">01</span>
                    <span class="month">Jun</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="blog-item">
                  <div class="blog-image">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-2.jpg" alt="Images" />
                    </a>
                  </div>
                  <div class="blog-content">
                    <div class="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i class="flaticon-user"></i>
                          </span>{" "}
                          <a href="#"> Admin</a>
                        </li>
                        <li>
                          <span>
                            <i class="fa-solid fa-comments"></i>
                          </span>{" "}
                          Comments (1)
                        </li>
                      </ul>
                    </div>
                    <h4 class="title">
                      <a href="blog-details.html">
                        If any Construction Company Wishes to commence its
                      </a>
                    </h4>
                    <div class="blog-button">
                      <a class="tj-secondary-btn" href="blog-details.html">
                        Read More{" "}
                        <i class="fa-light fa-arrow-right-from-line"></i>
                      </a>
                    </div>
                  </div>
                  <div class="blog-date">
                    <span class="date">05</span>
                    <span class="month">Feb</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="blog-item">
                  <div class="blog-image">
                    <a href="blog-details.html">
                      <img src="assets/images/blog/blog-3.jpg" alt="Images" />
                    </a>
                  </div>
                  <div class="blog-content">
                    <div class="post-meta">
                      <ul>
                        <li>
                          <span>
                            <i class="flaticon-user"></i>
                          </span>{" "}
                          <a href="#"> Admin</a>
                        </li>
                        <li>
                          <span>
                            <i class="fa-solid fa-comments"></i>
                          </span>{" "}
                          Comments (1)
                        </li>
                      </ul>
                    </div>
                    <h4 class="title">
                      <a href="blog-details.html">
                        How To Build and Launch Powerful Websites
                      </a>
                    </h4>
                    <div class="blog-button">
                      <a class="tj-secondary-btn" href="blog-details.html">
                        Read More{" "}
                        <i class="fa-light fa-arrow-right-from-line"></i>
                      </a>
                    </div>
                  </div>
                  <div class="blog-date">
                    <span class="date">08</span>
                    <span class="month">Nov</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-sec-shape">
            <img src="assets/images/shapes/blog-bg-shape.svg" alt="Shape" />
          </div>
        </section>
        {/* <!-- end: Blog Section --> */}

        {/* <!-- start: Brand Section --> */}
        <section class="tj-brand-section">
          <div class="container">
            <div class="tj-heading-area">
              <h4 class="sub-title">
                Top Brands
                <span class="section-sub-title-shape"></span>
              </h4>
              <h2 class="sec-title">
                Our Trusted <span>Partners</span>
              </h2>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="swiper tj-brand-slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="brand-item">
                        <a href="#">
                          <img
                            src="assets/images/brand/brand-1.png"
                            alt="Images"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="brand-item">
                        <a href="#">
                          <img
                            src="assets/images/brand/brand-2.png"
                            alt="Images"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="brand-item">
                        <a href="#">
                          <img
                            src="assets/images/brand/brand-3.png"
                            alt="Images"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="brand-item">
                        <a href="#">
                          <img
                            src="assets/images/brand/brand-4.png"
                            alt="Images"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="brand-item">
                        <a href="#">
                          <img
                            src="assets/images/brand/brand-5.png"
                            alt="Images"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Brand Section --> */}

        {/* <!-- start: Newsletter Section --> */}
        <section class="tj-newsletter-section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="newsletter-content-area">
                  <div class="tj-heading-area">
                    <h4 class="sub-title">
                      Newsletter Subscription
                      <span class="section-sub-title-shape"></span>
                    </h4>
                    <h2 class="sec-title">
                      Get Instant Industrial <span>Updates!</span>
                    </h2>
                    <div class="left-icon">
                      <img
                        src="assets/images/icon/newsletter-left.svg"
                        alt="Icon"
                      />
                    </div>
                  </div>
                  <div class="contact-form-style-2">
                    <form>
                      <div class="form-input">
                        <input
                          type="email"
                          id="emailTwo"
                          name="email"
                          placeholder="Enter Mail ID"
                          required=""
                        />
                        <button class="tj-primary-btn d-none d-sm-inline-block">
                          Subscribe
                        </button>
                      </div>
                      <div class="input-checkbox">
                        <input
                          id="checkbox"
                          name="checkbox"
                          type="checkbox"
                          checked
                        />
                        <label for="checkbox">
                          Your email is safe with us, we don’t spam. Privacy
                          Policy{" "}
                        </label>
                      </div>
                      <button class="tj-primary-btn d-sm-none">
                        Subscribe
                      </button>
                    </form>
                    <div class="right-icon">
                      <img
                        src="assets/images/icon/newsletter-right.svg"
                        alt="Icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Newsletter Section --> */}
      </main>
    </>
  );
};

export default Home;