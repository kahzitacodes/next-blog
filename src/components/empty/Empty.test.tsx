import { fireEvent, render, screen } from '@testing-library/react'
import { Empty } from '.'
import { emptyMock } from '@/mocks/empty'

describe('<Empty />', () => {
  it('should render successfully', () => {
    const { container } = render(<Empty {...emptyMock} />)

    expect(screen.getByRole('heading', { name: /Oops!/i })).toBeInTheDocument()
    expect(screen.getByText(/page not found/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button anc call its function', () => {
    const handleBack = jest.fn()
    const { container } = render(
      <Empty
        {...emptyMock}
        button={{ children: 'Back to list', onClick: handleBack }}
      />
    )

    const button = screen.getByRole('button', { name: /back to list/i })

    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleBack).toHaveBeenCalled()

    expect(container.firstChild).toMatchSnapshot()
  })
})
