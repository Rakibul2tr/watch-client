import { Alert, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';

const Singleproduct = () => {

    const {user}=useAuth();
    const [bookings,setbookings]=useState(false)

    const {singleId}=useParams();
    const [product,setproduct]=useState({})
    useEffect( ()=>{
        fetch(`https://intense-temple-06841.herokuapp.com/product/${singleId}`)
        .then(res=>res.json())
        .then(data=>setproduct(data))
    },[])
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
            data.status="panding"
        fetch('https://intense-temple-06841.herokuapp.com/buyproduct',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Your product bying is Successfully')
                
                setbookings(true)
            }
            
        })
    }
    
    return (
      <div className=""> 
      <div className="row benner">
      <Typography variant="h3"sx={{fontWeight:'Bold',color:'#05e340',textAlign:'center',pt:8}}>
         <span style={{color:'#fff'}}>Wielcome To</span> Our Booking Room
        </Typography> 
      </div>
        <div className="container py-5"> 
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                <Paper elevation={0} sx={{p:1}}>
                    <Box className=" text-center">
                        <img width="100%" height="100%" src={product.img} alt="" />
                    </Box>
                    <Box className="p-2">
                        <Typography variant="h5"sx={{color:'#444',fontSize:'20px'}}>
                        {product.name}
                        </Typography>
                        <Typography variant="h6"sx={{fontWeight:'Bold',color:'#444',fontSize:'17px'}}>
                        Price:${product.price}
                        </Typography>
                        <p>{product.des}. . .</p>
                        <Link to={`/explore`}>
                        <Button style={{padding:'8px 20px',backgroundColor:'#444',color:'#fff'}} variant="contained">Go Back</Button>
                        </Link>
                    </Box>
                 </Paper>
                </Grid>
                
                <Grid item xs={12} md={7}>
                    <Box sx={''}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        {''}
                        </Typography>
                        <form className="formApoin" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={product.name} {...register("title")} placeholder='Title' /><br/>
                            <input defaultValue={product.price} {...register("price")} /><br/>
                            <input defaultValue={user.displayName}{...register("name")}  placeholder='name'/><br/>
                            <input defaultValue={user.email} {...register("email")} placeholder='email' /><br/>
                            <input  {...register("number")} placeholder='Number'type='number' /><br/>
                            <input  {...register("address")} placeholder='write address' /><br/>
                            <input {...register("date")} placeholder='date'type="date" /><br/>
                            <input type="submit" />
                            {bookings &&<Alert variant="filled" sx={{textAlign:'center'}} severity="success"> Your buying Successfully. </Alert>}
                        </form>
                        
                    </Box>
                </Grid>
            </Grid>
        </div>
        </div>
    );
};

export default Singleproduct;