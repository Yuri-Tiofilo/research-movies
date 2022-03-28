import { renderHook, act } from '@testing-library/react-hooks'

import { AuthProvider, useAuth } from 'common/hooks/auth'

describe('Auth Hook', () => {
  it('should be able to sign in', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    result.current.signIn({
      name: 'Yuri Silva'
    })

    expect(setItemSpy).toHaveBeenCalledWith(
      'MoviesSearch:user',
      JSON.stringify({
        name: result.current.user.name,
        id: result.current.user.id
      })
    )
    expect(result.current.user.name).toEqual('Yuri Silva')
  })

  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case 'MoviesSearch:user':
          return JSON.stringify({
            name: 'Yuri Silva'
          })
        default:
          return null
      }
    })

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    expect(result.current.user.name).toEqual('Yuri Silva')
  })

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case 'MoviesSearch:user':
          return JSON.stringify({
            id: 'id-123',
            name: 'Yuri Silva'
          })
        default:
          return null
      }
    })

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem')

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    act(() => {
      result.current.signOut()
    })

    expect(removeItemSpy).toHaveBeenCalledTimes(1)
    expect(result.current.user).toBeUndefined()
  })
})
