import React from 'react'
import { AuthProvider } from './auth'
import { MoviesProvider } from './movies'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <MoviesProvider>{children}</MoviesProvider>
  </AuthProvider>
)
export default AppProvider
