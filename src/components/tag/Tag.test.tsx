import { render, screen } from '@/utils/tests/custom-render'
import { Tag } from './Tag'

describe('<Tag />', () => {
  it('should render successfully', () => {
    render(<Tag label="React" />)

    expect(screen.getByText(/react/i)).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(<Tag icon="Heart" label="React" />)

    expect(screen.getByText(/react/i)).toBeInTheDocument()
    expect(screen.getByTestId('Heart')).toBeInTheDocument()
  })
})
