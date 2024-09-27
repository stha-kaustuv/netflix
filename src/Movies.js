import React from 'react'
import Row from './Row'
import requests from './request'
function Movies() {
  return (
    <div>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Row title="Popular" fetchUrl={requests.fetchPopularMovies} />
    </div>
  )
}

export default Movies
