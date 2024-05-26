import React from 'react';
import UMNavBar from '../component/UMNavbar';
import TableUser from '../component/table';
import Footer from '../component/footer';


export default function UMpage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , backgroundImage: "url('./bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow:"hidden",
    margin: "0",
    padding: "0", }}>
      <UMNavBar />
      <div style={{ flex: 1 }}>
        <TableUser />
      </div>
      <Footer/>
    </div>
  );
}
