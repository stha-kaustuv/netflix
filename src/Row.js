import React, { useState, useEffect } from 'react';
import axios from './axios';  // Use the configured axios instance
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results || []);  // Ensure movies is always an array
                return request;
            } catch (error) {
                console.error('Error fetching data from TMDB:', error);
            }
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            const movieName = movie?.name || movie?.title || movie?.original_name || "";
            console.log('Searching trailer for:', movieName);
            movieTrailer(movieName)
                .then((url) => {
                    if (url) {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get("v"));
                    } else {
                        console.log('No trailer found for movie:', movieName);
                    }
                })
                .catch((error) => console.error('Error finding trailer:', error));
        }
    };

    return (
        <div className='row ml-5'>
            <h2 className='text-white text-2xl mx-11'>{title}</h2>

            <div className={`row__posters flex overflow-y-hidden overflow-x-scroll p-10 no-scrollbar ${isLargeRow ? "row__posterLarge" : ""}`}>
                {
                    movies.length > 0 && movies.map((movie) => (
                        <img 
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster w-[100%] object-contain ${isLargeRow ? "max-h-80" : "max-h-40"} transition-transform duration-450 hover:scale-125 cursor-pointer mx-2`}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} 
                            alt={movie.name || movie.title || 'Movie poster'} />
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
