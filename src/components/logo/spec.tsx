import { render, screen } from '@testing-library/react'
import { Logo } from './'

describe('Logo', () => {
  it('should render successfully', () => {
    const { container } = render(<Logo />)

    expect(screen.getByAltText(/logo/i)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
