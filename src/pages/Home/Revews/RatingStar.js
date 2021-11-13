import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import { Rating } from 'react-simple-star-rating';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const RatingStar = (props) => {
    const {des,img,name,sub_title,rating}=props?.review;
    
    return (
        <Grid item xs={12} md={3}>   
        <Paper sx={{p:3,minHeight:'250px'}}>
            <p>{des}</p>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Box><img width="50px" src={img} alt="" /></Box>
                <Box sx={{px:4}}>
                    <Typography variant='h6' style={{color:'#000',fontSize:'16px'}}>
                    {name}
                    </Typography>
                    <Typography variant='h6'sx={{fontSize:'14px'}}>
                    {sub_title}
                    </Typography>
                </Box>
            </Box>
            <Stack spacing={1}>
                <Rating name="size-small" readOnly defaultValue={rating} size="small" />
            </Stack>
        </Paper>
        
    </Grid>
    );
};

export default RatingStar;