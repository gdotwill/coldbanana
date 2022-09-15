import React from 'react';

import FooterWrapper from './styled';

const Footer = () => {   
    return (
        <FooterWrapper className='mb-0'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3>CHILLED GRAPE</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit. Lorem ipsum dolor sit <br />
                            amet, consectetur adipiscing elit. <br />
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <p className='footer-header'>Company</p>
                                <ul>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Our Work</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className='col-md-4'>
                                <p className='footer-header'>Products</p>
                                <ul>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Our Work</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <div className='col-md-4 pl-0'>
                                <p className='footer-header'>Follow Us</p>
                                <div className='socials-wrapper'>              
                                    <div className='socials'>
                                        <img src="../../../images/email.png" alt="socials-image" />
                                    </div>
                                    <div className='socials'>
                                        <img src="../../../images/twitter.png" alt="socials-image" />
                                    </div>
                                    <div className='socials'>
                                        <img src="../../../images/youtube.png" alt="socials-image" />
                                    </div>
                                </div>
                                <div className='socials-wrapper mt-3'>              
                                    <div className='socials'>
                                        <img src="../../../images/facebook.png" alt="socials-image" />
                                    </div>
                                    <div className='socials'>
                                        <img src="../../../images/instagram.png" alt="socials-image" />
                                    </div>
                                    <div className='socials'>
                                        <img src="../../../images/tiktok.png" alt="socials-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </FooterWrapper>   
    );
}

export default Footer
