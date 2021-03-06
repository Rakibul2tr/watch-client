import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import reviewimga from '../../../images/review.gif'
import useAuth from '../../../Hoocks/useAuth';


const url='https://lh3.googleusercontent.com/a-/AOh14GgGbcEQsxdrRib6Cmqo5ZKA6eWHdn-vfkM9GgOW=s96-c';

const Reviews = () => {
    const {user}=useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://intense-temple-06841.herokuapp.com/review',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Thanks for Review.')
            }
        })
    }
    return (
        <div className="container">
        <div className="row">
           <Typography variant="h3"sx={{fontWeight:'Bold',color:'#05e340',textAlign:'center',py:3}}>
             <span style={{color:'#000'}}>Pleas give </span>One Review
            </Typography> 
           <div className="col-md-5">
                <img width='100%' src={reviewimga} alt="" />
            </div>
            <div className="col-md-7">
                <form className="formApoin" onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name")} placeholder='Your Name' /><br/>
                    <input {...register("sub_title")} placeholder="Your Profasion"/><br/>
                    <input {...register("des")}  placeholder='writhe Revew Something'/><br/>
                    <input {...register("rating")} type="number" min="1" max="5" placeholder='reting star (between 1 - 5) only'/><br/>
                    <input defaultValue={user.photoURL?user.photoURL:url} {...register("img")} placeholder='Give img Link'/><br/>
                    <input type="submit" value="Add Review" />
                </form>
            </div>
        </div>
     </div>
    );
 }

export default Reviews;