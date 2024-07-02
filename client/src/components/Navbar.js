import React from 'react'
import netflix_icon from '../assets/logo.png';
import search_icon from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import caret_icon from '../assets/caret_icon.svg';
import profile_img from '../assets/profile_img.png';
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';

const Navbar = ({ isScrolled }) => {

  const navLink = [
    { name: 'Home', link: '/' },
    { name: 'TV Shows', link: '/tv' },
    { name: 'Movies', link: '/movies' },
    { name: 'New & Popular', link: '/new_popular' },
    { name: 'My List', link: '/mylist' },
    { name: 'Browse by Languages', link: '/browse_languages' },
  ]

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate('/login')
  });

  return (
    <NavContainer>
      <nav className={`${isScrolled ? 'scrolled' : 'notScrolled'}`} >
        <div className='leftside'>
          <div className='logo'>
            <img src={netflix_icon} alt='no img' />
          </div>
          <ul className='links'>
            {navLink.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='rightside'>
          <img src={search_icon} className='icons' alt='search' />
          <img src={bell_icon} className='icons' alt='bell button' />
          <div className='navbar-profile'>
            <img src={profile_img} className='profile' alt='profile' />
            <img src={caret_icon} className='icons'  alt='caret' />
            <div className='dropdown'>
              <Link className='link' onClick={() => signOut(firebaseAuth)}>Sign Out</Link>
            </div>
          </div>
        </div>
      </nav>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  .notScrolled{
    display: flex;
  }
  .scrolled{
    display: flex;
    background-color: black;
  }
  nav{
    padding: 0.4rem;
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    z-index: 2;
    align-items: center;
    transition: 0.3s ease-in-out;
    position: fixed;
    .leftside{
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 4rem;
    }
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 10rem;
      height: 2rem;
    }
    .links{
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li{
        a{
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  .rightside {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-right: 4rem;
    .icons {
      width: 20px;
      cursor: pointer;
    }
    .navbar-profile {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 0.5rem;
      position: relative;
    }
    .profile {
      width: 35px;
      border-radius: 3px;
    }
    .dropdown {
      position: absolute;
      top: 100%;
      right: 0%;
      width: max-content;
      background: #191919;
      padding: 18px 22px;
      z-index: 1;
      display: none;
      .link {
        color: white;
        cursor: pointer;
      }
    }
    .navbar-profile:hover .dropdown{
      display: block;
    }
    button {
      background-color: red;
      border: none;
      cursor: pointer;
      border-radius: 50%;
    }
    &:focus {
      outline: none;
    }
    svg{
      color: white;
      font-size: 2rem;
    }
  }

  @media(max-width: 1400px) {
    .leftside {
      .links {
        gap: 1rem;
      }
    }
  }

  @media (max-width: 1200px) {
    .leftside {
      .links {
        display: none;
      }
    }
  }
  
`

export default Navbar