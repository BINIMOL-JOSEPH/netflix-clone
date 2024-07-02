import React from 'react';
import styled from 'styled-components';
import background_banner from '../assets/background_banner.jpg';

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img src={background_banner} alt='no connection' />
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  img{
    height: 100vh;
    width: 100vw;
  }
`

export default BackgroundImage