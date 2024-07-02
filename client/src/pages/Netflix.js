import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Card from '../components/Card';
import hero_banner from '../assets/hero_banner.jpg';
import hero_title from '../assets/hero_title.png';
import play_icon from '../assets/play_icon.png';
import info_icon from '../assets/info_icon.png';
import Footer from '../components/Footer';

const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null)
  }

  return (
    <HeroContainer>
      <div className='hero'>
        <Navbar isScrolled={isScrolled} />
        <img className='hero-banner' src={hero_banner} alt='hero banner' />
        <div className='hero-caption'>
          <img className='title' src={hero_title} alt='hero-title' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='hero-btns'>
            <button className='btn play-btn' ><img src={play_icon} alt='play icon' />Play</button>
            <button className='btn more-btn' ><img src={info_icon} alt='info icon' />More info</button>
          </div>
        </div>
      </div>
      {/* <Card /> */}
      <div className='movie-cards'>
        <Card title={"BlockBuster Movies"} category={"now_playing"} />
        <Card title={"Only on Netflix"} category={"upcoming"} />
        <Card title={"Top Rated"} category={"top_rated"} />
        <Card title={"Upcoming"} category={"popular"} />
      </div>
      <Footer />
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background-color: black;
  .hero{
    position: relative;
    .hero-banner{
      width: 100vw;
      mask-image: linear-gradient(to right, transparent, black 75%);
      -webkit-mask-image: linear-gradient(to right, transparent, black 75%);
    }
    .hero-caption {
      position: absolute;
      width: 100%;
      padding-left: 4rem;
      bottom: 0px;
      .title {
        width: 90%;
        max-width: 420px;
        margin-bottom: 20px;
      }
      p {
        max-width: 700px;
        margin-bottom: 20px;
        color: white;
        font-size: 17px;
      }
    }
    .hero-btns {
      display: flex;
      margin: 4rem 0;
      gap: 2rem;
      .btn {
        img {
          width: 25px;
        }
        border: 0;
        outline: 0;
        padding: 8px 20px;
        display: inline-flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        border-radius: 4px;
        gap: 1rem;
        background: white;
        color: black;
        cursor: pointer;
      }
      .btn.more-btn {
        background: #6d6d6eb3;
        color: #fff;
      } 
      .btn.play-btn:hover{
        background: #ffffffbf;
      }
      .btn.more-btn:hover{
        background: #6d6d6e66;
      }
    }
  }

  @media (max-width: 1200px) {
    .hero .hero-caption .title {
      width: 20% !important;
      margin-bottom: 10px;
    }

    .hero .hero-caption p {
      margin-bottom: 10px;
    }

    .hero .hero-btns {
      margin: 1rem 0;
    }

    .hero .hero-btns .btn {
      padding: 4px 10px;
    }

    .hero .hero-btns .btn img {
      width: 15px;
    }
  }
`


export default Netflix