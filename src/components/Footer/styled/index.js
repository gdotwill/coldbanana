import styled from 'styled-components';

const component = styled.div.attrs({ className: 'about-wrapper' })`
    marign-top: 100px;
    padding-top: 200px;
    background-repeat: no-repeat;
    bottom:0px; 
    left:0px;
    padding-bottom: 20px;

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        text-transform: uppercase;
        color: #fff;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 33px;
        color: #FFFFFF;
    }

    .footer-header {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        background: linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;

        li {
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            text-align: justify;
            color: #212121;
            margin-top:10px;
        }
    }

    .socials-wrapper {
        display: flex;
    }

    .socials {
        background: linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%);
        border-radius: 8px;
        height: 45px;
        width: 45px;
        margin-right: 30px;
        text-align: center;
        padding-top: 10px;
    }

    @media (max-width: 600px) {
        margin-top: -100px;
    }
`;

export default component;
