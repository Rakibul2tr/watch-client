import { Alert, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const [seccess,setseccess]=useState(false)
  const onSubmit = data => {
      fetch('https://intense-temple-06841.herokuapp.com/users/admin',{
          method:'PUT',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        
        if(data.modifiedCount){
            setseccess(true)
            alert('Admin created is successfull.')
        }
      })
  }
    return (
        <Container>
             {seccess &&<Alert variant="filled" severity="success"> Admin created Successfully. </Alert>}
            <Typography sx={{color:'#444'}} variant="h4" >
                 Make an Admin User
            </Typography>
            <form className="formApoin" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={''} {...register("email")} placeholder='email' /><br/>
                <input type="submit" value="Make Admin" />
            </form>
        </Container>
    );
};

export default MakeAdmin;