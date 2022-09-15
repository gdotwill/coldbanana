import styled from 'styled-components';

const component = styled.div.attrs({ className: 'location-wrapper' })`
    width: 50%;
    display: flex;
    margin-top: 20px;

    h4 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    

    .location-info {
        width: 60%;
        height: 220px;
        margin-top: 6%;
        box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.15);
        z-index: 1;
        border-bottom-right-radius: 30px;
        border-top-right-radius: 30px;
        padding-top:20px;
        margin-left: -20px;
        padding-left: 20px;
    }

    .location, .pin, .share {
        display: flex;
        margin-bottom: 20px;

        img {
            margin-right: 10px;
        }
    }

    @media (max-width: 1200px) {
        width: 100%;
    }

`;

export default component;
