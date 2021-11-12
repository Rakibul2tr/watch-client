import React from 'react';
import notfoundimg from '../../images/404.png';

const NotFound = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row py-5">
                    <h1 className="text-center">Search Result Not Found</h1>
                    <div className="imgage text-center py-5">
                        <img src={notfoundimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;