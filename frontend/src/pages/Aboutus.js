import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/footer';

export default function Aboutus() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ position: 'relative', flex: 1, display: 'flex' , margin:"20px"}}>


                <div style={{ flex: 1, position: 'relative' }}>
                    <video
                        style={{
                            position: 'absolute',
                            top: 0,
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
                        <source src="./about.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'px', backgroundColor: '#fcead1' }}>
                    <div style={{ color: 'black', textAlign: 'center' }}>
                        <div style={{ fontWeight: '900', fontSize: '50px' }}>WHO WE ARE</div>
                        <div style={{ marginTop: '20px', fontSize: '20px' }}>
                            <p>BLAB is a leading company in providing innovative solutions for managing your employees efficiently.</p>
                            <p>Our mission is to deliver the best tools to help you manage your workforce effectively and streamline your business operations.</p>
                            <p>Join us to experience the difference in employee management with BLAB.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
