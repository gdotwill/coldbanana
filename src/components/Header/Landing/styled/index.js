import styled from 'styled-components';

const component = styled.div.attrs({ className: 'landing' })`
    margin: auto;
    width: 50%;
    h1 {
        font-size: 64px;
        font-weight: bold;
        margin-top: 250px;
    }

    .readmore {
        background: linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%);
        border-radius: 100px;
        text-align: center;
        color: white;
        width: 249px;
        height: 60px;
        padding-top: 12px;
        margin-top: 20px;
        font-size: 22px;
        font-weight: bold;

        :hover {
            cursor: pointer;
        }

    }
`;

export default component;
