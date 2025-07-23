import React, { useEffect } from 'react'
import homeImage from "../assets/images/imgi_1_avataaars.svg"
export default function Home() {
    
    useEffect(()=>{
    document.title = "Home";
      },[]);
    return (
        <>
            <div className="home d-flex justify-content-center align-items-center text-white vh-100">
                <div className="text-center">
                    <img src={homeImage} alt ="" className="mb-3" />
                    <div>
                        <div className="text-center pt-4" >
                            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <div className="line me-3"></div> 
                                <i className="fa-solid fa-star" />
                                <div className="line ms-3"></div>
                            </div>
                        </div>
                    </div>
                    <div>graphic artist - web designer - illustrator</div>
                </div>
            </div>


        </>
    )
}
