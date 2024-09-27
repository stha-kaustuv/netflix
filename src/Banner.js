import React, { useEffect, useState } from 'react';
import axios from './axios'; // Use the configured axios instance
import requests from './request';
import Navbar from './Navbar';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {
    const [movie, setMovie] = useState(null); // Initialize with null to handle initial render
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const movies = request.data.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovie(randomMovie);
            } catch (error) {
                console.error('Error fetching Netflix Originals:', error);
            }
        }
        fetchData();
    }, []);

    console.log(movie);

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
        <header className=' relative h-[860px] text-white'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
                <Navbar/>


            <div className='ml-8 pt-36 h-48'>
                <h1 className='text-5xl font-extrabold pb-2 text-gray-300'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="mt-4">
                    <button
                    onClick={() => handleClick(movie)}
                     className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-8 mr-4 py-2 bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition-all duration-200">Play</button>
                    <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-8 py-2 bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition-all duration-200">My List</button>
                </div>
                <h1 className="w-3/5 leading-6 pt-4 text-lg font-semibold max-w-[360px] h-20 mt-5 text-gray-300">
                    {movie?.overview}
                </h1>
            </div>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#111] via-[#111] to-transparent" />
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </header>
    )
}

export default Banner;
