import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Card.css'
import { Link } from 'react-router-dom';

const ProductBook = ({product}) => {
    const {name,img,price,des,_id}=product;
    const shortdes=des.slice(0,40)

    return (
        <Grid item xs={12} md={3}sx={{p:3}} className="products">
            <Paper elevation={0} sx={{p:1}}>
                <Box className="productsimg">
                    <img src={img} alt="" />
                </Box>
                <Box className="productcontent">
                    <Typography variant="h6"sx={{color:'#444',fontSize:'17px'}}>
                    {name}
                    </Typography>
                    <Typography variant="h6"sx={{fontWeight:'Bold',color:'#444',fontSize:'17px'}}>
                    Price:${price}
                    </Typography>
                    <p>{shortdes}. . .</p>
                    <Link to={`/explore/${_id}`}>
                    <Button style={{padding:'8px'}} variant="contained"><AddShoppingCartIcon/>By Now</Button>
                    </Link>
                </Box>
            </Paper>
        </Grid>
    );
};

export default ProductBook;