import react from "react";
import { Link } from "react-router-dom";

export default function Features(){
    return(
        <>
           {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <p><span className="text-primary me-2">#</span>Our Features</p>
            <h1 className="display-5 mb-0">
              Special Features of 
              <span className="text-primary">Ducart</span> 
            </h1>
          </div>
          <div className="col-lg-6">
            <div
              className="bg-primary h-100 d-flex align-items-center py-4 px-4 px-sm-5"
            >
              <i className="fa fa-3x fa-mobile text-white"></i>
              <div className="ms-4">
                <p className="text-white mb-0">Call for more info</p>
                <Link to="tel:+91-7764940854" className="fs-3 text-white mb-0">+91 7764940854 </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 gx-4">
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-2.png" alt="Icon" />
            <h5 className="mb-3">100% Genuine and Original</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-3.png" alt="Icon" />
            <h5 className="mb-3">14 Days Refund policy</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-4.png" alt="Icon" />
            <h5 className="mb-3">100% Genuine Products</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-5.png" alt="Icon" />
            <h5 className="mb-3">24/7 Customer Supports</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-6.png" alt="Icon" />
            <h5 className="mb-3">Featers</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-7.png" alt="Icon" />
            <h5 className="mb-3">Featers</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-8.png" alt="Icon" />
            <h5 className="mb-3">Featers</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <img className="img-fluid mb-3" src="img/icon/icon-9.png" alt="Icon" />
            <h5 className="mb-3">Featers</h5>
            <span
              >Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.</span
            >
          </div>
        </div>
      </div>
    </div>
   {/* <!-- Service End --> */}
        </>
    )
}