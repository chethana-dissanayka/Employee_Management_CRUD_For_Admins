import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/footer.js';


export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ position: 'relative', flex: 1 }}>
        <video
          style={{
            position: 'absolute',
            top: 1,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
          autoPlay
          loop
          muted
        >
          <source src="./work.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: 'relative', zIndex: 1, marginTop:"50px" }}>
         <div style={{color:"white" , fontWeight:"900", fontSize:"70px"}}> WELCOME TO BLAB</div> 
         <div style={{color:"white", fontWeight:"700", fontSize:"30px"}}>EMPLOYEE MANAGEMENT SYSTEM</div>
        </div>
      </div>
     <Footer/>
    </div>
  );
}
