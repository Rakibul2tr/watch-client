import React  from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import liginimg from '../../../images/login.jpg';
import { useForm } from "react-hook-form";
import './Login.css';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';


const Login = () => {
    const {user,loginUser,isloding,errormasseg,googlesingin}=useAuth();
    const location= useLocation()
    const histry=useHistory();
    const url=location?.state?.from ||'/';
    if(user.email || user.displayName){
        histry.push(url);
    }

    const { register, handleSubmit } = useForm();
   const onSubmit = data => {
      const {email,password}=data;
      loginUser(email,password);
      console.log(errormasseg);

  }
    return (
        <Container sx={{py:3}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    {user?.email &&<Alert variant="filled" severity="success"> Your Login is Successfully. </Alert>}
                        <Typography variant="h4" sx={{textAlign:'center',py:5,color:'#444'}}>Pleas Login</Typography>
                    {!isloding && <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="standard-basic"{...register("email")} label="Email" variant="standard" />
                        <TextField id="standard-basic"{...register("password")} label="Password" variant="standard"type="password" />
                        <input type="submit" value="Login" /><br/>
                        <Link to="/register">
                        <Button sx={{color:'#000'}} size="small">Are you new user ? pleas register.</Button>
                        </Link>
                    </form>}
                    {isloding&&<div style={{width:'300px',margin:'auto'}}><CircularProgress color="secondary" /></div>}
                    {errormasseg ?<span style={{color:'red',}}>{errormasseg}</span>:''}
                    <p>--------------------------</p>
                    <Button onClick={googlesingin} className="gradientbtn" sx={{color:'#000',border:'3px solid #000'}}>Google Sing in</Button>
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

export default Login;