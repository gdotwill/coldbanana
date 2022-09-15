import React from 'react';

import AboutWrapper from './styled';

const About = () => {   
    return (
        <AboutWrapper>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 about-info'>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <h3>amet.</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <img src='../../../images/plant-image.png' alt="" />
                    </div>
                </div>
            </div>
        </AboutWrapper>
    );
}

export default About
