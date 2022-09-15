import React from 'react';

import LandingPage from './styled'

const Landing = () => {   
    return (
        <LandingPage>
            <div className='container'>
                <div className='col-md-1'></div>
                <div className='col-md-10 col-sm-12'>
                    <h1>Lorem ipsum <br />dolor sit amet.</h1>
                    <div className='readmore'>
                        Read more
                    </div>
                </div>
                <div className='col-md-1'></div> 
            </div>
        </LandingPage>
 
    );
}

export default Landing
