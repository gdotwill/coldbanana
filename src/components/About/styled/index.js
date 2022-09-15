import styled from 'styled-components';

const component = styled.div.attrs({ className: 'about-wrapper' })`
    margin-top: 400px;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: #000000;
        margin-top: 20px;
    }

    .plant {
        background-image: url('../../../images/plant-background.png');
        background-size: cover;
        background-position: center;
        background-size: 300px 274px;  
        background-repeat: no-repeat;    

    }

    .about-info {
        margin-top: 200px;
    }
    
    @media (max-width: 1200px) {
        width: 100%;
        margin-top: -100px
    }

`;

export default component;
