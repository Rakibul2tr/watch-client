import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ManegeorderProps from './ManegeorderProps';
import './Manegeorders.css'

const ManegeOrders = () => {
    
    const [Allorders,setAllorders]=useState([])
    useEffect(()=>{
        fetch('https://intense-temple-06841.herokuapp.com/manegeorder')
        .then(res=>res.json())
        .then(data=>setAllorders(data))
    },[Allorders])

    

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="left">Clients Name</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {Allorders.map((orders) => (<ManegeorderProps
            key={orders._id}
            orders={orders}
            ></ManegeorderProps>))}
            </TableBody>
      </Table>
      
    </TableContainer>
    );
};

export default ManegeOrders;