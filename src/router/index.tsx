import React from 'react'
import { RouteObject, redirect } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import NotFound from '@/pages/NotFound'

const routes: RouteObject[] = [
  {
    path: '/',
    loader: () => redirect('/home')
  },
  {
    path: '/home',
    id: 'HomePage',
    element: <HomePage />,
  },
  {
    path: '/notfound',
    id: 'NotFound',
    element: <NotFound />,
  },
  {
    path: '*',
    loader: () => redirect('/notfound')
  }
]

export default routes