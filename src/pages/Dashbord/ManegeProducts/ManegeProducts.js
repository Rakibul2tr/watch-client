import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hoocks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const ManegeProducts = () => {
    const {products}=useAuth();
    const handleOpen=(id)=>{
        const prossed= window.confirm('Are you sure delete this products ?')
        if(prossed){
            fetch(`https://intense-temple-06841.herokuapp.com/manegproduct/${id}`,{
            method:'DELETE',
            headers:{'content-type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Your product is deleted.')
            }
        })
        }
    }
    return (
        <TableContainer component={Paper}>
        <Typography variant='h4' sx={{pb:2,textAlign:'center',color:'#000'}}>
            All Products of This Site {products.length}
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Admin</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {products.map((row) => (
                <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                 <TableCell  align="left">
                     <img width="30px" src={row.img} alt="" />
                 </TableCell>
                <TableCell sx={{backgroundColor:'#444',color:'white'}} component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell  align="left">{row.des.slice(0,30)}. . .</TableCell>
                <TableCell sx={{color:'#000'}} align="left">$ {row.price}</TableCell>
                <TableCell className="updatebtn" onClick={()=>handleOpen(row._id)} align="left">Delete</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
};

export default ManegeProducts;