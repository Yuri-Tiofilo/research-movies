import { lazy } from 'react'

const Home = lazy(() => import('containers/Home'))
const Details = lazy(() => import('containers/Details'))
const Welcome = lazy(() => import('containers/Welcome'))

const route = [
  {
    path: '/',
    component: Welcome,
    exact: true,
    isPrivate: false
  },
  {
    path: '/dashboard',
    component: Home,
    exact: true,
    isPrivate: true
  },
  {
    path: '/details/:id',
    component: Details,
    exact: true,
    isPrivate: true
  }
]

export default route
