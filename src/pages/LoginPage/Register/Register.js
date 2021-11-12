import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import liginimg from '../../../images/login.jpg';
import { useForm } from "react-hook-form";
import './Register.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';


const Register = () => {
    const {user,registerUser,isloding,errormasseg,seaveuser}=useAuth();


    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    if(data.password!==data.password2){
        alert('your password dont meched')
        return;
    }
    const {email,password,name}=data;
    registerUser(email,password,name)
    // seaveuser(email,name)
  }
    return (
        <Container sx={{py:3}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    {user?.email &&<Alert variant="filled" severity="success"> Your Register is Successfully. </Alert>}
                        <Typography variant="h4" sx={{textAlign:'center',py:5,color:'#444'}}>Register</Typography>
                    {!isloding && <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
                        <TextField defaultValue={user.name} id="standard-basic"{...register("name")} label="Name" variant="standard"type="text" />
                        <TextField id="standard-basic"{...register("email")} label="Email" variant="standard"type="email" />
                        <TextField id="standard-basic"{...register("password")} label="Password" variant="standard"type="password" />
                        <TextField id="standard-basic"{...register("password2")} label="RePassword" variant="standard"type="password" />
                        <input type="submit" value="Register" /><br/>
                        <Link to="/login">
                        <Button sx={{color:'#000'}} size="small">Are you new user ? pleas register.</Button>
                        </Link>
                    </form>}
                    {isloding && <div style={{width:'300px',margin:'auto'}}><CircularProgress color="secondary" /></div>}
                    {errormasseg ?<span style={{color:'red',}}>{errormasseg}</span>:''}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img style={{width:'100%'}} src={liginimg} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;