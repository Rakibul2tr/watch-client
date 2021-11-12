
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import DeshHome from './DeshHome';
import Myorders from '../Myorders/Myorders';
import Revew from '../Revew/AddReview';
import Pay from '../Pays/Pay';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hoocks/useAuth';
import AllUsers from '../Allusers/AllUsers';
import ManegeOrders from '../ManageAllOrders/ManegeOrders';
const DeshbordHome = () => {
  const {admin,user,logOut}=useAuth();
    const [control,setcontrol]=React.useState('home')
    return (
        <Box sx={{ flexGrow: 1,py:5,minHeight:'500px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}md={2}sx={{backgroundColor:'#fff'}}>
            <Box sx={{width:'150px',height:'80px',backgroundColor:'#faf4ed',textAlign:'center',margin:'auto'}}>
                <Box>
                <img width="45px"sx={{borderRadius:'20px'}} src={user.photoURL} alt="Your Profile" />
                </Box>
                <small className="text-center">{user?.displayName}</small>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'start',pl:3}}className="deshbordbtn py-3">
                
                {
                  admin?<>
                  <Button  onClick={()=>setcontrol('addproduct')}>Add Product</Button>
                  <Button onClick={()=>setcontrol('makeadmin')}>Make Admin</Button>
                  <Button onClick={()=>setcontrol('allusers')}>All Users</Button>
                  <Button onClick={()=>setcontrol('manegeorders')}>Manege Orders</Button>
                  </>:<>
                  <Button onClick={()=>setcontrol('myorders')}>My Orders</Button>
                  <Button onClick={()=>setcontrol('pay')}>Pay Here</Button>
                  <Button onClick={()=>setcontrol('revew')}>Revew</Button>
                  </>
                }
                
                <Button onClick={logOut}>Log Out</Button>
            </Box>
          </Grid>
          <Grid item xs={12}md={10}>
            <Box>
                {
                control==="home"&&<DeshHome></DeshHome>
                }
                {
                control==="myorders"&&<Myorders/>
                }
                {
                control==="pay"&&<Pay/>
                }
                {
                control==="revew"&&<Revew/>
                }
                {
                control==="addproduct"&&<AddProduct/>
                }
                {
                control==="makeadmin"&&<MakeAdmin/>
                }
                {
                control==="allusers"&&<AllUsers/>
                }
                {
                control==="manegeorders"&&<ManegeOrders/>
                }
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default DeshbordHome;