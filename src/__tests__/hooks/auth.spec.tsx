import { renderHook, act } from '@testing-library/react-hooks'
import MockAdapter from 'axios-mock-adapter'

import { AuthProvider, useAuth } from 'common/hooks/auth'

import api from 'common/services/api'

const apiMock = new MockAdapter(api)

describe('Auth Hook', () => {
  it('should be able to sign in', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    result.current.signIn({
      name: 'Yuri Silva'
    })

    await waitForNextUpdate()

    expect(setItemSpy).toHaveBeenCalledWith(
      'MoviesSearch:user',
      JSON.stringify({ name: result.current.user.name, id: 'id-123' })
    )
    expect(result.current.user.name).toEqual('Yuri Silva')
  })

  it('should restore saved data from storage when auth inits', () => {
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

    expect(removeItemSpy).toHaveBeenCalledTimes(2)
    expect(result.current.user).toBeUndefined()
  })
})
