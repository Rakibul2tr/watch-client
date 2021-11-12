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

const AllUsers = () => {
    const [users,setusers]=useState([])
    useEffect( ()=>{
        fetch('https://intense-temple-06841.herokuapp.com/users')
        .then(res=>res.json())
        .then(data=>setusers(data))
    },[])
    return (
        <TableContainer component={Paper}>
            <Typography variant='h4' sx={{pb:2,textAlign:'center',color:'#000'}}>
                All Users of This Site {users.length}
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
                {users.map((row) => (
                    <TableRow
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell sx={{backgroundColor:'#444',color:'white'}} component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell  align="left">{row.email}</TableCell>
                    <TableCell sx={{backgroundColor:'#000',color:'white'}} align="left">{row.role}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    );
};

export default AllUsers;