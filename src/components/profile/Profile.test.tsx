import { render, screen } from '@testing-library/react'
import { Profile } from '.'
import { profileMock } from '@/mocks/profile'

describe('<Profile />', () => {
  it('should render successfully', () => {
    const { container } = render(<Profile {...profileMock} />)

    expect(
      screen.getByRole('heading', { name: /Karine Pereira/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/Lorem ipsum dolor sit amet./i)).toBeInTheDocument()

    expect(screen.getByAltText(/profile image/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
