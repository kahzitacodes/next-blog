import { render, screen } from '@/utils/tests/custom-render'
import { navigationMock } from '@/mocks/navigation'
import { Header } from './Header'
import { MainNav } from '../main-nav'

describe('<Profile />', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Header>
        <MainNav items={navigationMock} />
      </Header>,
      {}
    )

    expect(screen.getByAltText(/Logo/i)).toBeInTheDocument()
    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/about/i)).toBeInTheDocument()
    expect(screen.getByText(/contact/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
