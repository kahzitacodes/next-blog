import { render, screen } from '@testing-library/react'
import { ScrollTop } from '.'

describe('<ScrollTop />', () => {
  it('should render successfully', () => {
    const { container } = render(<ScrollTop />)

    expect(
      screen.getByRole('button', { name: /voltar ao topo/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
