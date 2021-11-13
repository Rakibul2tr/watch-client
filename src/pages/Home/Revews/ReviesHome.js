import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import RatingStar from './RatingStar';

const RevewsHome = () => {
    const [reviews,setreviews]=useState([])
    
    
    // const handleRating = (rate) => {
    //     setRating(rate)
    //     // Some logic
    //   }
    useEffect(()=>{
        fetch('https://intense-temple-06841.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[reviews])
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{p:3}}>
                    <Grid item xs={12}>
                        <h5 style={{color:'#444'}}> REVIEWS</h5>
                        <Typography variant='h4'sx={{color:'#000'}}>
                            What's Our Clients <br/>
                            Says
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{py:5}}>
                    {
                    reviews.map(review=><RatingStar
                        review={review}
                        key={review._id}
                    ></RatingStar>)
                    }
                    
                </Grid>
              </Box>
        </Container>
    );
};

export default RevewsHome;