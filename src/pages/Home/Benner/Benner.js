import React from 'react';
import { Carousel } from 'react-bootstrap';
import slidimg1 from '../../../images/slider-1.png';
import slidimg2 from '../../../images/slider-2.png';
import slidimg3 from '../../../images/slider-3.png';
import homebenner from '../../../images/homebne3.png'
import { Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';

const Benner = () => {
    return (
        <div className="homebennerbg">
        <div className="container py-5">
        <div className="row">
            <Typography variant="h2"sx={{fontWeight:'Bold',color:'#000',textAlign:'center',py:3}}>
                <span style={{color:'#fff'}}>Ouer Products </span>Is Greet.
            </Typography>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 z-index"
                        height="400px"
                        src={slidimg1}
                        alt="First slide"
                        />
                        <Carousel.Caption className="slideCaption">
                        <h1 style={{fontSize:'35px',fontWeight:700}}>Jet Black ColorFit Pro 2 Smartwatch</h1>
                        <Button className="carouselbtn">Get Start</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        height="400px"
                        src={slidimg2}
                        alt="Second slide"
                        />

                        <Carousel.Caption className="slideCaption">
                        <h1 style={{fontSize:'35px'}}>Men Black Chronograph Watch CH2600_SOR</h1>
                        <Button className="carouselbtn">Get Start</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        height="400px"
                        src={slidimg3}
                        alt="Third slide"
                        />

                        <Carousel.Caption className="slideCaption">
                        <h1 style={{fontSize:'35px'}}>Men Black Chronograph Watch CH2600_SOR</h1>
                        <Button className="carouselbtn">Get Start</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-md-5">
                    <div className="imagehome">
                        <img width="100%" height="400px" src={homebenner} alt="" />
                    </div>
                    <div className="contenthome">
                    <Typography variant="h2"sx={{fontWeight:'Bold',color:'#000',textAlign:'center',py:3}}>
                     <span style={{color:'#fff'}}>Whoy Not </span><br/>Our Product ?
                    </Typography>
                    </div>
                </div>
            </div>
            
         </div>
        </div>
    );
};

export default Benner;