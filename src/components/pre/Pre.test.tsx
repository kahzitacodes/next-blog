import { render, screen } from '@testing-library/react'
import { Pre } from '.'
import { preMock } from '@/mocks'

describe('<Pre />', () => {
  it('should render successfully', () => {
    const { container } = render(<Pre dataTestid="pre" {...preMock} />)

    expect(screen.getByTestId('pre')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
