import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hoocks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Myorders = () => {
    const {user}=useAuth();
    const [orders,setorders]=useState([]);

    useEffect( ()=>{
        fetch(`https://intense-temple-06841.herokuapp.com/myorders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setorders(data)
        })
        
    },[user,orders])
    
    const handleOpen=(id)=>{
        const prossed= window.confirm('Are you sure delete this buy?')
        if(prossed){
            fetch(`https://intense-temple-06841.herokuapp.com/myorders/${id}`,{
            method:'DELETE',
            headers:{'content-type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Your buy deleted.')
            }
        })
        }
    }


    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="left">User Name</TableCell>
                <TableCell align="left">User Email</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Number</TableCell>
                <TableCell align="left">Price</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {orders.map((row) => (
                <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row"sx={{color:'#e44cbe'}}>
                    {row.title}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.number}</TableCell>
                <TableCell sx={{color:'#e44cbe'}} align="left">$ {row.price}</TableCell>
                <TableCell className="updatebtn" onClick={()=>handleOpen(row._id)} align="left">Cancel</TableCell>
                </TableRow>
            ))}
            </TableBody>
      </Table>
    </TableContainer>
    );
};

export default Myorders;