import { render, screen } from '@/utils/tests/custom-render'
import { Grid } from './Grid'

describe('<Grid />', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Grid dataTestid="grid" sm={{ cols: 2, gap: 6 }} lg={{ cols: 3, gap: 8 }}>
        {Array.from({ length: 9 }, (_, index: number) => (
          <div key={index}>grid</div>
        ))}
      </Grid>
    )

    expect(screen.getByTestId('grid')).toHaveClass(
      'lg:grid-cols-3',
      'sm:grid-cols-2'
    )
    expect(container).toMatchSnapshot()
  })
})
