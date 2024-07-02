import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import netflix_icon from '../assets/logo.png';

const Header = (props) => {

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <div className="logo">
                <img src={netflix_icon} alt="No internet conection" />
            </div>
            <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
                {props.login ? 'Log In' : 'Sign In'}
            </button>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    .logo{
        img{
            cursor: pointer;
            height: 2.5rem;
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
        cursor: pointer;
    }
`

export default Header