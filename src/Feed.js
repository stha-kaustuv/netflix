import React from 'react'
import Row from './Row'
import requests from './request'
function Feed() {
  return (
    <div>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="UpComing Movies" fetchUrl={requests.fetchUpcomingMovies} />
     <Row title="Popular" fetchUrl={requests.fetchPopularMovies} />
     <Row title="Airing Today" fetchUrl={requests.fetchAiringToday} />
     <Row title="TV Top Rated" fetchUrl={requests.fetchTvTopRated} />
     <Row title="On The Air" fetchUrl={requests.fetchOnTheAir} />
     <Row title="Popular Tv Shows" fetchUrl={requests.fetchPopularTv} />
    </div>
  )
}

export default Feed
