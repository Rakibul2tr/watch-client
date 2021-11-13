import React from 'react';
import { Carousel } from 'react-bootstrap';
import slidimg1 from '../../../images/ramslider.jpg';
import slidimg2 from '../../../images/slider-mtp.jpg';
import slidimg3 from '../../../images/series-slider.jpg';
import Button from '@restart/ui/esm/Button';
import { Box } from '@mui/system';

const Benner = () => {
    return (
        <div className="homebennerbg">
          <div className="container py-5">
          <div className="row">
                <div className="col-md-12">
                    <h2 style={{color:'#fff',textAlign:'center',paddingBottom:'10px'}}>Ouer Products Is Greet.</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Carousel>
                    <Carousel.Item className="carouselitem">
                        <img
                        className="d-block w-100 z-index"
                        src={slidimg1}
                        alt="First slide"
                        />
                        <Carousel.Caption className="slideCaption">
                        <h1 style={{fontSize:'30px',fontWeight:700}}>Jet Black ColorFit Pro 2 Smartwatch</h1>
                        <Button className="carouselbtn">Get Start</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Box className="carouselitem">
                        <img
                        className="d-block w-100"
                        src={slidimg2}
                        alt="Second slide"
                        />

                        </Box>
                        <Carousel.Caption className="slideCaption">
                        <h1 style={{fontSize:'30px'}}>Men Black Chronograph Watch CH2600_SOR</h1>
                        <Button className="carouselbtn">Get Start</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carouselitem">
                        <img
                        className="d-block w-100"
                        src={slidimg3}
                        alt="Third slide"
                        />

                        <Carousel.Caption className="slideCaption">
                        <h1 style={{fontSize:'30px'}}>Men Black Chronograph Watch CH2600_SOR</h1>
                        <Button className="carouselbtn">Get Start</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Benner;