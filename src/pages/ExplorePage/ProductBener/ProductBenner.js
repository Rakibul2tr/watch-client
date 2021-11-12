import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from "react";



const ProductBenner = () => {
    const [hours,sethours]=useState('')
    const [munits,setmunits]=useState('')
    const [second,setsecond]=useState('')
    const [format,setformat]=useState('PM')
    const [days,setdays]=useState('')
    const [mounth,setmounth]=useState('')
    const [years,setyour]=useState('')
    setInterval(function(){
        const hours = document.getElementById('hours');
        const minite = document.getElementById('minite');
        const second = document.getElementById('second');    
        
    
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
       
        const day = date.getUTCDate();
        const months = date.getUTCMonth()
        const years = date.getUTCFullYear();
    
        if(hour < 10){
            sethours(`0${hour}`)
            
        }
        if(minute < 10){
            sethours(`0${minute}`)
            
        }
        
        
        if(hour < 12){
            setformat('AM')
        }
        else {
            sethours(hour)
            setmunits(minute)
            setsecond(seconds)
        }
    
        if( day && months && years < 10){
            setdays(day)
            setmounth(months)
            setyour(years)
        }
        else{
            setdays(`${day}`)
            setmounth(`/${months}`)
            setyour(`/${years}`)
            
        }
        
    },1000)
    
    return (
        <Container sx={{}} >
                <Box sx={{ flexGrow: 1 }} className="productbenrebg">
                    <Grid container sx={{display:'flex',justifyContent:'',alignItems: 'center'}}> 
                        <Grid item xs={12}md={12}>
                            <Box  sx={{}}>
                            <div className="w-full">
                              <div className="flex bg-white h-screen">
                                <div className="hidden lg:block lg:w-1/2 bg-right" >
                                    <div className="h-full object-cover  ">
                                        <div className="clock">
                                            <span id="hours">{hours}</span>
                                            <span id="minite">{munits}</span>
                                            <span id="second">{second}</span>
                                            <span id="PmAm">{format}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                                    <div>
                                        <h1 className="py-5 text-5xl font-semibold text-dark md:text-6xl text-center">
                                            <span id="day">{days}</span>
                                            <span id="month">{mounth}</span>
                                            <span id="yaer">{years}</span>
                                        </h1>
                                     </div>
                                    </div>
                                </div>
                                
                              </div>
                            </div>
                            </Box>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    );
};

export default ProductBenner;