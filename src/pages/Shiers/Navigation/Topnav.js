import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Topnav = () => {
    return (
        <div className='bgtopNav'>
            <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between lh-lg">
                    <div className="col-6 number"sx={{}}>
                        <p style={{color:'#fff'}}>Email :  
                        <a className="text-danger" href="#"> rakibul2tr@gmail.com , </a> 
                        <span> Phone : 012345685</span> </p>
                    </div>
                    <div className="col-6 text-end">
                        <p style={{color:'#fff',padding:'0 3px'}}><FacebookIcon/><TwitterIcon/><InstagramIcon/><YouTubeIcon/></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Topnav;