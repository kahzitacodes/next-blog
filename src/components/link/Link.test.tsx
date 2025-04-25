import { render, screen } from '@testing-library/react'
import { Link } from '.'

describe('<Link />', () => {
  it('should render successfully', () => {
    const { container } = render(<Link>My link</Link>)

    expect(screen.getByText(/my link/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
