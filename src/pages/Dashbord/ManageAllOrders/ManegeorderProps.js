import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import './Manegeorders.css'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height:450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ManegeorderProps = (props) => {
    const {title,name,address,status,email,number,_id,price,date}=props.orders;

    const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const { register, handleSubmit } = useForm();
   const onSubmit = data => {
       console.log(data);
       fetch(`https://intense-temple-06841.herokuapp.com/manegeorder/${_id}`,{
           method:'PUT',
           headers:{'content-type':'application/json'},
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.modifiedCount){
               alert('Your orders is updated successfull.')
               setOpen(false)
           }
       })
   }

    return (
        <>
          <TableRow
                
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row"sx={{color:'#e44cbe'}}>
                {title}
            </TableCell>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{address}</TableCell>
            <TableCell sx={{color:'#e44cbe'}} align="left">$ {price}</TableCell>
            <TableCell align="left">{status}</TableCell>
            <TableCell className="updatebtn" onClick={()=>handleOpen(_id)} align="left">Update</TableCell>
         </TableRow> 

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form className="updateorderform" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={title} {...register("title")} placeholder='product name' /><br/>
                <input defaultValue={price} {...register("price")} placeholder='Price' /><br/>
                <input defaultValue={name} {...register("name")} placeholder="user name"/><br/>
                <input defaultValue={email} {...register("email")} placeholder="user Email"/><br/>
                <input defaultValue={number} {...register("number")} placeholder="number"/><br/>
                <input defaultValue={address}{...register("address")}  placeholder='Address'/><br/>
                <input defaultValue={date}{...register("date")}  placeholder='Date'/><br/>
                <select defaultValue={status} {...register("status")}placeholder='status'>
                    <option value="panding">Panding</option>
                    <option value="aproved">Aproved</option>
                </select>
                <input type="submit" value="Update Orders" />
            </form>
          </Box>
        </Modal> 
        </>
    );
};

export default ManegeorderProps;