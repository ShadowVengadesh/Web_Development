import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Banner.css'
const Banner = () => {
  return (
    <>
    <div className="container-fluid align-items-center banner p-0">
      <div className="row">
        <div className="col">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" style={{ objectFit: 'cover' }} src="src/assets/banner1.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{ objectFit: 'cover' }} src="src/assets/banner2.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" style={{  objectFit: 'cover' }} src="src/assets/banner3.jpg" alt="Third slide" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default Banner;
