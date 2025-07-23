import React, { useEffect, useState } from 'react';
import porImg1 from "../assets/images/poert1.png";
import portImg2 from "../assets/images/port2.png";
import portImg3 from "../assets/images/port3.png";

export default function Portfolio() {
  useEffect(()=>{
      document.title = "Portfolio";
        },[]);
  const [isOpen, setIsopen] = useState(false);
  const [tImg, setTImg] = useState(null);

  const displayLight = (img) => {
    setTImg(img);
    setIsopen(true);
  };

  const closeLight = () => {
    setIsopen(false);
    setTImg(null);
  };

  const images = [porImg1, portImg2, portImg3, porImg1, portImg2, portImg3];

  return (
    <>
      <div className="mb-4 portfolio d-flex justify-content-center align-items-center flex-column vh-100">
        <div className="pt-4 text-center">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line bg-black me-3" />
            <i className="fa-solid fa-star"></i>
            <div className="line bg-dark ms-3" />
          </div>
        </div>

        <div className="container">
          <div className="row g-5">
            {images.map((img, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="rounded-3 overflow-hidden position-relative" onClick={() => displayLight(img)} >
                  <img alt="" className="w-100 rounded-3" src={img} />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="model position-fixed start-0 w-100 top-0 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"  onClick={closeLight}>
          <img src={tImg} onClick={(e)=>e.stopPropagation()} alt="lightbox" className="img-fluid rounded shadow w-50"  />
        </div>
      )}
    </>
  );
}
