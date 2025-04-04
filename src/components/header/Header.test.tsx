import { render, screen } from '@/utils/tests/custom-render'
import { Header } from './Header'
import { headerConfig } from '@/config'

describe('<Profile />', () => {
  it('should render successfully', () => {
    const { container } = render(<Header navItems={headerConfig} />, {})

    expect(screen.getByAltText(/Logo/i)).toBeInTheDocument()

    expect(screen.getByText(/home/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
