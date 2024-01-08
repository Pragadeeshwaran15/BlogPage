import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const API_URL="https://659a4014652b843dea5360a2.mockapi.io/blogs"
function App() {
  let router=createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
