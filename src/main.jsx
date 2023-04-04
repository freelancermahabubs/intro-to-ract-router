import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './coponents/Home/Home';
import About from  './coponents/About/About';
import Contact from './coponents/Contact/Contact';
import First from './coponents/First/First';
import Friends from './coponents/Friends/Friends';
import FriendDetail from './coponents/FriendDetail/FriendDetail';
import Posts from './coponents/Posts/Posts';
import PostDetail from './coponents/PostDetail/PostDetail';
// import Errorpage from './coponents/Errorpage/Errorpage';


const router = createBrowserRouter([
  {
    path: '',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },

      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path: 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: '*',
        element: <div>400 Not Found</div>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
