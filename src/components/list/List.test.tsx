import { render, screen } from '@testing-library/react'
import { List } from '.'
import { socialLinksMock } from '@/mocks/social-links'

describe('<List />', () => {
  it('should render successfully', () => {
    const { container } = render(<List items={socialLinksMock} />)

    expect(screen.getByText(/Instagram/i)).toBeInTheDocument()

    const svgElement = screen.getByTestId('Instagram')
    expect(svgElement).toBeInTheDocument()

    expect(screen.getByText(/Twitter/i)).toBeInTheDocument()
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument()
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
