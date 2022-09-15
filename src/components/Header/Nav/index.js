import React from 'react';

import NavLinks from './styled';

const Nav = () => {
    return (
        <NavLinks className="pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 text-left">                    
                        <p className='logo'>CHILLED GRAPE</p>                   
                    </div>
                    <div className="col-md-6 col-sm-12 pr-4">
                        <ul> 
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>About</li>
                            <li>Home</li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <div className='login'>
                            Login
                        </div>
                    </div>
                </div>
            </div> 
        </NavLinks>
    )
}

export default Nav
