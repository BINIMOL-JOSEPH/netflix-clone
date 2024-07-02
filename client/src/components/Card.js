import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({ title, category }) => {

    const [movieData, setMovieData] = useState([]);

    const cardsRef = useRef();

    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjdiMmUxZWQyMTJlY2U5YzZlOGZiNzAxZjRlY2UwNSIsIm5iZiI6MTcxOTg5MjM4Ni41MDIzMzEsInN1YiI6IjY2ODM3ODEyZWY1NTMwYjRiMTE3OWFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bvl2MgW3_S6b-bvw8ZGU8fzwUHx3IwEBJvd1P5pmNYY',
        'Accept': 'application/json'
    };

    const fetchMovieData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, {
                headers: headers
            });
            setMovieData(response.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        fetchMovieData();

        cardsRef.current.addEventListener('wheel', handleWheel);
    }, []);

    return (
        <CardContainer>
            <h2>{title ? title : 'Popular on Netflix'}</h2>
            <div className='cards-list' ref={cardsRef}>
                {movieData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className='card' key={card}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt='movie' />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    margin-left: 4rem;
    h2{
        margin-top: 2rem;
    }
    .cards-list {
        display: flex;
        gap: 1rem;
        overflow-x: scroll;
        img {
            width: 240px;
            border-radius: 4px;
            cursor: pointer;
        }
        .card {
            position: relative;
            p {
                position: absolute;
                bottom: 10px;
                right: 10px;
            }
        }
    }

    .cards-list::-webkit-scrollbar {
        display: none;
    }
`

export default Card