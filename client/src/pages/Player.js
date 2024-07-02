import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import back_arrow_icon from '../assets/back_arrow_icon.png';

const Player = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const [movieDetails, setMovieDetails] = useState({
    name : "",
    published_at : "",
    key : "",
    type : ""
  });

  const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjdiMmUxZWQyMTJlY2U5YzZlOGZiNzAxZjRlY2UwNSIsIm5iZiI6MTcxOTg5MjM4Ni41MDIzMzEsInN1YiI6IjY2ODM3ODEyZWY1NTMwYjRiMTE3OWFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bvl2MgW3_S6b-bvw8ZGU8fzwUHx3IwEBJvd1P5pmNYY',
    'Accept': 'application/json'
  };

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
        headers: headers
      });
      setMovieDetails(response.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <PlayerContainer>
      <img src={back_arrow_icon} alt="arrow button" onClick={() => navigate(-1)}/>
      <iframe src={`https://www.youtube.com/embed/${movieDetails.key}`} title='trailer' allowFullScreen />
      <div className='player-info'>
        <p>{movieDetails.published_at.slice(0, 10)}</p>
        <p>{movieDetails.name}</p>
        <p>{movieDetails.type}</p>
      </div>
    </PlayerContainer>
  )
}

const PlayerContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    iframe {
      width: 90%;
      height: 90%;
    }
    img {
      position: absolute;
      top: 20px;
      left: 20px;
      cursor: pointer;
      width: 50px;
    }
    .player-info {
      justify-content: space-between;
      align-items: center;
      display: flex;
      width: 90%;
    }
`

export default Player