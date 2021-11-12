import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="Contactbg">
            <Container sx={{py:5}}>
                <Box spacing={2} >
                    <Grid xs={12}>
                    <Typography variant="h5"sx={{fontSize:17,py:3,textAlign:'center',color:'#fff'}}>
                            Contact Us
                        </Typography>
                        
                        <Box sx={{textAlign:'center',pb:4}}>
                        <Typography variant="h4"sx={{fontWeight:'Bold',pb:5,textAlign:'center',color:'#fff'}}>
                        Always Contact With Us.
                        </Typography>
                        <form className="Contactform" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email")} placeholder='Email' /><br/>
                            <input {...register("subject")} placeholder='Subject' /><br/>
                            <textarea name="massege" id="" cols="30" rows="6" placeholder='Write somthing'></textarea><br/>
                            <input type="submit" />
                        </form>
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ContactForm;