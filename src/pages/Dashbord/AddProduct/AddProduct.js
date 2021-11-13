import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import imageproduct from '../../../images/dribbble_1.gif'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
   const onSubmit = data => {
       console.log(data);
        fetch('https://intense-temple-06841.herokuapp.com/addproduct',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Thanks Yore product is Added')
            }
        })
    
}
    return (
        <div className="container">
            <div className="row">
            <Typography variant='h3' sx={{pb:2,textAlign:'center',color:'#444'}}>
            Add An Product
            </Typography>
                <div className="col-md-6">
                    <form className="formApoin" onSubmit={handleSubmit(onSubmit)}>
                        <input  {...register("name")} placeholder='Give product title' /><br/>
                        <input  {...register("model")} placeholder="Model number"/><br/>
                        <input {...register("price")} placeholder="Product Price"/><br/>
                        <input {...register("des")}  placeholder='description'/><br/>
                        <input defaultValue={'https://i.ibb.co/Z1FXsmk/watch-10.jpg'}{...register("img")}  placeholder='image link'/><br/>
                        <input type="submit" value="Add Product" />
                    </form>
                </div>
                <div className="col-md-6">
                    <img width='100%' src={imageproduct} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;