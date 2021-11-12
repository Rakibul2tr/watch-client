import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import useAuth from '../../../Hoocks/useAuth';
import HomeproductProps from './HomeproductProps';

const Homeproduct = () => {
    const {products}=useAuth();
    const homeproduct=products.slice(0,6) 
    // 
    return (
        <Container sx={{py:5}} className="products">
        <Box sx={{ }}>
            <Grid container spacing={4}>
                <Grid xs={12}>
                <Typography variant="h5"sx={{fontSize:17,py:3,textAlign:'center',color:'#444'}}>
                    Our Product
                </Typography>
                <Typography variant="h4"sx={{fontWeight:'Bold',pb:5,textAlign:'center',color:'#000'}}>
                    Your Dimand Is Our Provid
                </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
                {
                    homeproduct.map(product=><HomeproductProps
                    key={product._id}
                    product={product}
                    
                    ></HomeproductProps>
                )
                }
            </Grid>
        </Box>
    </Container>
    
    );
};

export default Homeproduct;

