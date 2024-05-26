import React from 'react';
import UMNavBar from '../layout/UMNavbar';
import TableUser from '../layout/table';
import Footer from '../layout/footer';

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
