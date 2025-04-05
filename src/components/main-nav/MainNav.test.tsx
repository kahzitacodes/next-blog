import { render, screen } from '@testing-library/react'
import { navigationMock } from '@/mocks/navigation'
import { MainNav } from '.'

describe('<MainNav />', () => {
  it('should render successfully', () => {
    const { container } = render(<MainNav items={navigationMock} />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
