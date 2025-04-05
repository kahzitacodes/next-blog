import { render, screen } from '@testing-library/react'
import { Icon } from '.'

describe('<Icon />', () => {
  it('should render the correct icon', () => {
    const { container } = render(<Icon name="Anchor" size={32} />)

    const svgElement = screen.getByTestId('Anchor')
    expect(svgElement).toBeInTheDocument()
    expect(svgElement).toHaveAttribute('width', '32')

    expect(container.firstChild).toMatchSnapshot()
  })
})
