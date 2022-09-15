import styled from 'styled-components';

const component = styled.div.attrs({ className: 'nav-link' })`
    font-weight: bold;
    
    img {
        width: 40%;
        margin-left: 5px;
    }

    a {
        color: #fff;
    }

    .logo {
        font-size: 36px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
        
    li {
        float: right;
        padding: 16px;
        font-weight: bold;

        :hover {
            cursor: pointer;
        }
    }

    .login {
        background: linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%);
        border-radius: 100px;
        text-align: center;
        color: white;
        width: 175px;
        height: 40px;
        padding-top: 8px;
        margin-top: 6px;

        :hover {
            cursor: pointer;
        }

    }

    button {
        background: #FC5A5A;
        border-radius: 5px;
        color: #fff;
        padding: 10px 20px;
        font-weight: bold;
        border: 1px solid #FC5A5A; 
    }
`;

export default component;
