import React from 'react'
import { H1 } from 'components'
import { render } from '@testing-library/react'

describe('H1 Component', () => {
  it('should be able to render an H1', () => {
    const { getByText } = render(<H1>Teste h1</H1>)

    expect(getByText('Teste h1')).toBeTruthy()
  })
})
