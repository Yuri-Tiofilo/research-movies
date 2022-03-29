import React from 'react'
import Loading from 'components/Controllers/Loading'
import { render } from '@testing-library/react'

describe('Loading Component', () => {
  it('should be able to render an Loading', () => {
    const { getByText } = render(<Loading />)

    expect(getByText('Loading...')).toBeTruthy()
  })
})
