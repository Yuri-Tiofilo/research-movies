import React, { createContext, useCallback, useState, useContext } from 'react'
import { v4 } from 'uuid'

interface User {
  id: string
  name: string
}
interface SignInCredentials {
  name: string
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}
interface AuthState {
  user: User
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('MoviesSearch:user')
    if (user) {
      return { user: JSON.parse(user) }
    }
    return {} as AuthState
  })
  const signIn = useCallback(async ({ name }: SignInCredentials) => {
    const user = {
      name,
      id: v4()
    }

    localStorage.setItem('MoviesSearch:user', JSON.stringify(user))
    setData({
      user
    })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('MoviesSearch:user')
    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}
export { AuthProvider, useAuth }
