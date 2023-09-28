import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/index.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoPlayer from './pages/videoPlayer/index.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children:
        [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/videoPlayer/:id",
            element: <VideoPlayer/>
          }
        ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
