// Import css
import './landingpage.css';

// import module react
import React from 'react';

//import others
import Navbar from '../../components/navbar';

export default function LandingPage() {
   return (
      <>
         <Navbar />
         <div className="backgorundLandingPage">
            <div className="container pt-5">
               <h1 className="textColorLanding pt-5 fontSizeLandingPage">
                  NOW IS <br /> YOUR TIME
               </h1>
               <div className="btn btn-body btnColor mt-5 textColorLanding">Find your next event</div>
            </div>
         </div>
         <div className="container mt-3 shadow-sm p-3 mb-3 bg-body rounded border-start border-warning border-3">
            <h4 className="fw-bold">Do events help you find connection?</h4>
            <p>Help us understand how attending events contributes to building social connection by taking a short survey before and after your next event. Start here.</p>
         </div>
         <div className="container">
            <h1>Popular in</h1>
         </div>
      </>
   );
}
