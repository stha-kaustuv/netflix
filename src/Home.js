import React from 'react'

import Banner from './Banner'

import { Outlet } from 'react-router-dom';


function Home() {
  return (
    <div>
       <div className="App bg-[#141414]">
     <Banner/>
     <Outlet/>
     

     
    </div>
    </div>
  )
}

export default Home
