import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const RevewsHome = () => {
    const [reviews,setreviews]=useState([])
    useEffect(()=>{
        fetch('https://intense-temple-06841.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[])
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
                        reviews.map(review=><Grid item xs={12} md={3}key={review._id}>
                                <Paper sx={{p:3,minHeight:'250px'}}>
                                    <p>{review.des}</p>
                                    <Box sx={{display:'flex',alignItems:'center'}}>
                                        <Box><img width="50px" src={review.img} alt="" /></Box>
                                        <Box sx={{px:4}}>
                                            <Typography variant='h6' style={{color:'#000',fontSize:'16px'}}>
                                            {review.name}
                                            </Typography>
                                            <Typography variant='h6'sx={{fontSize:'14px'}}>
                                            {review.sub_title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>)
                    }
                    
                </Grid>
              </Box>
        </Container>
    );
};

export default RevewsHome;