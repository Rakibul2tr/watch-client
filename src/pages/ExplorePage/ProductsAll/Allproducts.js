import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ProductBook from './ProductBook';
import useAuth from '../../../Hoocks/useAuth';

const Allproducts = () => {
    const {products}=useAuth()
    return (
        <Container className="products">
            <Typography variant="h3" sx={{color:'#000',textAlign:'center',py:5}}>
                Our All Products
            </Typography>
             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{textAlign:'center',}}>
                    
                {
                    products.map(product=><ProductBook key={product._id}
                        product={product}
                    ></ProductBook>)
                }
                </Grid>
             </Box>
        </Container>
    );
};

export default Allproducts;