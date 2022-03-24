import React, { createContext, useContext } from 'react'

interface FavoriteContextData {
  favorites: []
}
const FavoriteContext = createContext<FavoriteContextData>(
  {} as FavoriteContextData
)

const FavoriteProvider: React.FC = ({ children }) => {
  return (
    <FavoriteContext.Provider
      value={{
        favorites: []
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
function useFavorites(): FavoriteContextData {
  const context = useContext(FavoriteContext)

  return context
}
export { FavoriteProvider, useFavorites }
