import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function Service() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor:"#e3f1f2" }}>

      <Navbar />
      <div>
      <div style={{ fontWeight: '900', fontSize: '50px', backgroundColor:"#e3f1f2" }}>WHAT WE DO</div>
      </div>
      <div style={{ position: 'relative', flex: 1, display: 'flex', marginLeft:"20px" , marginRight:"20px", marginBottom:"20px"}}>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "#e3f1f2" }}>
          <div style={{ color: 'black', textAlign: 'center' }}>
            <div style={{ fontWeight: '800', fontSize: '30px' }}>web development</div>
            <div style={{ marginTop: '20px', fontSize: '20px' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./web.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      MERN
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      We used Html, Css, React, MERN, MEAN for web developmwnt.
                      We used Html, Css, React, MERN, MEAN for web developmwnt.
                      We used Html, Css, React, MERN, MEAN for web developmwnt.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>



        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'px', backgroundColor: "#e3f1f2" }}>
          <div style={{ color: 'black', textAlign: 'center' }}>
            <div style={{ fontWeight: '800', fontSize: '30px' }}>Automation</div>
            <div style={{ marginTop: '20px', fontSize: '20px' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./auto.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      PYTHONE
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica.
                      We did pythone automation systems.
                      We did pythone automation systems.
                    </Typography>
                  </CardContent>
                </CardActionArea>
               
              </Card>
            </div>
          </div>
        </div>


        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'px', backgroundColor: "#e3f1f2" }}>
          <div style={{ color: 'black', textAlign: 'center' }}>
            <div style={{ fontWeight: '800', fontSize: '30px' }}>Design</div>
            <div style={{ marginTop: '20px', fontSize: '20px' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./de.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      FIGMA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                      We used figma, photoshop, canva as design tools
                      We used figma, photoshop, canva as design tools
                      We used figma, photoshop, canva as design tools
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
