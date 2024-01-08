import React from 'react'
import Home from '../component/Home'
import Dashboard from '../component/Dashboard'
import Edit from '../component/Edit'
import Create from '../component/Create'
import { Navigate } from 'react-router-dom'
const AppRoutes=[
  {
    path:"/",
    status:true,
    element:<Home/>
   },
   {
    path:"/edit/:id",
    status:true,
    element:<Edit/>
   },
   {
    path:"/dashboard",
    status:true,
    element:<Dashboard/>
   },
   {
    path:"/create",
    status:true,
    element:<Create/>
   },
   {
    path:"*",
    status:false,
    element:<Navigate to="/"/>
   }
]
export default AppRoutes
