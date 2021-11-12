import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {  Typography, Paper } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const HomeproductProps = (props) => {
    const {img,name,price,des,_id}=props.product;
    const shortdes=des.slice(0,50)
    return (
        <Grid item xs={12}md={4}>
            <Paper elevation={0} sx={{minHeight:'400px'}}>
                <Box className="productsimg">
                    <img  src={img} alt="" />
                </Box>
                <Box className="productcontenthome">
                <Typography variant="h6"sx={{color:'#444',fontSize:'17px'}}>
                    {name}
                    </Typography>
                    <Typography variant="h6"sx={{fontWeight:'Bold',color:'#444',fontSize:'17px'}}>
                    Price:${price}
                    </Typography>
                    <p>{shortdes}. . .</p>
                </Box>
                <Box sx={{textAlign:'center',py:3}}>
                    <Link to={`/explore/${_id}`}>
                    <Button><AddShoppingCartIcon/>By Now</Button>
                    </Link>
                </Box>
            </Paper>
        </Grid>
    );
};

export default HomeproductProps;