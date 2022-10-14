import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from '@/router'

const browserRouter = createBrowserRouter(routes)
function App() {
  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
