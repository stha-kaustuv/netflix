import React from 'react'
import Row from './Row'
import requests from './request'

function Mylist() {
  return (
    <div>
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
      <Row title="Popular Tv Shows" fetchUrl={requests.fetchPopularTv} />
    </div>
  )
}

export default Mylist
