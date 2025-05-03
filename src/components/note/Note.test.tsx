import { render, screen } from '@testing-library/react'
import { Note } from '.'

describe('<Note />', () => {
  it('should render successfully', () => {
    const { container } = render(<Note dataTestid="note-test">My notes</Note>)

    expect(screen.getByRole('heading', { name: /Note/i })).toBeInTheDocument()
    expect(screen.getByTestId('FileText')).toBeInTheDocument()
    expect(screen.getByText('My notes')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render default note with right the style', () => {
    const { container } = render(<Note dataTestid="note-test">My notes</Note>)

    expect(screen.getByTestId('note-test')).toHaveClass(
      'text-blue-400',
      'bg-blue-800/20',
      'border-blue-900'
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render warning note with right the style', () => {
    const { container } = render(
      <Note type="warning" dataTestid="note-test-warning">
        My notes
      </Note>
    )

    expect(screen.getByTestId('note-test-warning')).toHaveClass(
      'text-yellow-400',
      'bg-yellow-800/20',
      'border-yellow-900'
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render tip note with right the style', () => {
    const { container } = render(
      <Note type="tip" dataTestid="note-test-tip">
        My notes
      </Note>
    )

    expect(screen.getByTestId('note-test-tip')).toHaveClass(
      'text-violet-400',
      'bg-violet-800/20',
      'border-violet-900'
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
