import { fireEvent, render, screen } from '@testing-library/react'
import { ToogleButton } from './ToogleButton'

const handleToggle = jest.fn()
afterEach(() => jest.clearAllMocks())

describe('<ToggleButton />', () => {
  it('should render close icon when isOpen is true', () => {
    render(<ToogleButton isOpen={true} handleToggle={handleToggle} />)
    const iconClose = screen.getByTestId('icon-close')
    expect(iconClose).toBeVisible()
  })

  it('should render open icon when isOpen is false', () => {
    render(<ToogleButton handleToggle={handleToggle} />)

    const iconClose = screen.getByTestId('icon-open')
    expect(iconClose).toBeVisible()
  })

  it('should call handleToggle when button is clicked', () => {
    render(<ToogleButton handleToggle={handleToggle} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleToggle).toHaveBeenCalled()
  })
})
