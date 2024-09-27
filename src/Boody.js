import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import Mylist from './Mylist'
import TVshows from './TVshows'
import Feed from './Feed'


function Boody() {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
            children:[
            {
                path:"/",
                element:<Feed/>
            },
            
            
                {
                path:"/tv",
                element:<TVshows/>
            },
            {
                path:"/movies",
                element:<Movies/>
            },
            {
                path:"/mylist",
                element:<Mylist/>
            }
        
        
        ]
        },
    ])

return (
<div>
  <RouterProvider router={appRouter}/>
</div>
);

}

export default Boody
