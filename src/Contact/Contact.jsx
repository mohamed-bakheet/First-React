import React, { useEffect, useState } from 'react'

export default function Contact() {
  useEffect(()=>{
document.title = "Contact us";
  },[]);
   
        const [nameValue, setnameValue] = useState("");
        const [ageValue, setageValue] = useState("");
        const [Email, setEmail] = useState("");
        const [userPassword, setuserPassword] = useState("");


        
   

    return (
    <>
            <div>
  <div className="mb-4 portfolio d-flex justify-content-center align-items-center vh-100">
    <div className="container-fluid">
      <div>
        <div className="text-center pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">conatct section</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line bg-black me-3" />
            <i className="fa-solid fa-star" />
            <div className="line bg-black ms-3"/>
          </div>
        </div>
      </div>
      <form className="w-50 p-3 mx-auto mt-5">
        <label htmlFor="userName" className={`position-relative top-0 ${nameValue? `` : "topLabel"} `}>userName : </label>
        <input id="userName" onInput={(e)=>setnameValue(e.target.value)} type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative" />
        <label htmlFor="userAge" className={`position-relative top-0 ${ageValue? `` : "topLabel"} `}>userAge : </label>
        <input id="userAge" onInput={(e)=>setageValue(e.target.value)} type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative" />
        <label htmlFor="userEmail" className={`position-relative top-0 ${Email? `` : "topLabel"} `}>userEmail : </label>
        <input id="userEmail" onInput={(e)=>setEmail(e.target.value)} type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative" />
        <label htmlFor="userPassword" className={`position-relative top-0 ${userPassword? `` : "topLabel"} `}>userPassword : </label>
        <input id="userPassword" onInput={(e)=>setuserPassword(e.target.value)} type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative" />
        <button className="btn mt-4 text-white"> send Message </button>
      </form>
    </div>
  </div>
</div>

                        </>
                        )
}
