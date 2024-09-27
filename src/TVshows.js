import React from 'react'
import Row from './Row'
import requests from './request'

function TVshows() {
  return (
    <div>
       <Row title="Airing Today" fetchUrl={requests.fetchAiringToday} />
       <Row title="TV Top Rated" fetchUrl={requests.fetchTvTopRated} />
       <Row title="On The Air" fetchUrl={requests.fetchTvTopRated} />
    </div>
  )
}

export default TVshows
