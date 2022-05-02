import { lazy } from 'react'

const Home = lazy(() => import('containers/Home'))
const Details = lazy(() => import('containers/Details'))
const Welcome = lazy(() => import('containers/Welcome'))
const Search = lazy(() => import('containers/Search'))

const route = [
  {
    path: '/',
    component: Welcome,
    exact: true,
    isPrivate: false
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    isPrivate: true
  },
  {
    path: '/details/:id',
    component: Details,
    exact: true,
    isPrivate: true
  },
  {
    path: '/search/:movie',
    component: Search,
    exact: true,
    isPrivate: true
  }
]

export default route
