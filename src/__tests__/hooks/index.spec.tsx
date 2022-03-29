import React from 'react'

import AppProvider from 'common/hooks'
import { render } from '@testing-library/react'
import { AuthProvider } from 'common/hooks/auth'
import { MoviesProvider } from 'common/hooks/movies'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'common/services/query'

describe('Render AppProvider', () => {
  it('render provider', () => {
    const Wrapper: React.FC = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <AuthProvider>
            <MoviesProvider>{children}</MoviesProvider>
          </AuthProvider>
        </AppProvider>
      </QueryClientProvider>
    )
    const { container } = render(<AppProvider />, {
      wrapper: Wrapper
    })

    expect(container).not.toBeNull()
  })
})
