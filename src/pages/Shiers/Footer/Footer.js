import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import './Footer.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const Footer = () => {
    return (
        <div className="footerbg pt-5">
            <Container sx={{py:5}}>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2} sx={{textAlign:'center'}}>
                    <Grid item xs={12} md={3} sx={{}}>
                    <h4 style={{color:'#fff'}}>OUR STORES</h4>
                        <span className="footerh6">Khulna</span>
                        <span className="footerh6">brishal</span>
                        <span className="footerh6">jossore</span>
                        <span className="footerh6">Dhaka</span>
                        <span className="footerh6">comilla</span>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <h4 style={{color:'#fff'}}>FOOTER MENU</h4>
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/explore"}>Explore</Nav.Link>
                    <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    <Nav.Link as={Link} to={"/deshbord"}>Deshbord</Nav.Link>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <h4 style={{color:'#fff'}}>INFORMATION</h4>
                        <span className="footerh6">New Collection</span>
                        <span className="footerh6">Men Baslete</span>
                        <span className="footerh6">womens watch</span>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    <h4 style={{color:'#fff'}}>ABOUT THE STORE</h4>
                    <h6 className="footerh6">New York -101010 Hudson <br/>Yards</h6>
                    <h6 className="footerh6">Call Now</h6>
                    <Button>+202555256412</Button>
                    </Grid>
                </Grid>
             </Box>
        </Container>
        </div>
    );
};

export default Footer;