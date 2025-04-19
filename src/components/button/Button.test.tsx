import { render, screen } from '@/utils/tests/custom-render'

import { Button } from './Button'

describe('<Button />', () => {
  it('should render successfully', () => {
    render(<Button>Read more</Button>)

    expect(
      screen.getByRole('button', { name: /read more/i })
    ).toBeInTheDocument()
  })

  it('should render button with icon', () => {
    const { container, debug } = render(<Button icon="Heart">Favorite</Button>)

    debug(container)
    expect(screen.getByTestId('Heart')).toBeInTheDocument()
  })
})
