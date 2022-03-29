import React from 'react'
import { Footer } from 'components'
import { render } from '@testing-library/react'

describe('Footer Component', () => {
  it('should be able to render an Footer', () => {
    const { getByText, getByRole } = render(<Footer />)

    expect(getByText('By Yuri Silva 🚀❤️')).toBeTruthy()
    expect(getByRole('img')).toBeTruthy()
  })
})
