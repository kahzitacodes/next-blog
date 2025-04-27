import { useRouter } from 'next/navigation'
import { render, screen, fireEvent } from '@/utils/tests/custom-render'
import { formatDate } from '@/utils/helpers'
import { postMock } from '@/mocks'
import { Post } from './Post'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}))

describe('<Post />', () => {
  const push = jest.fn()

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ push })
  })

  it('should render all post elements correctly', () => {
    render(<Post {...postMock} />)

    const formattedDate = formatDate(postMock.$frontMatter.date)
    const minuteText = postMock.$readingTime <= 1 ? 'minuto' : 'minutos'
    const dateAndReadingTime = `${formattedDate} • ${postMock.$readingTime.toString()} ${minuteText} de leitura`

    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
    expect(screen.getByAltText(postMock.$frontMatter.title)).toBeInTheDocument()
    expect(screen.getByText(dateAndReadingTime)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: postMock.$frontMatter.title })
    ).toBeInTheDocument()

    expect(
      screen.getByText(postMock.$frontMatter.description)
    ).toBeInTheDocument()

    expect(screen.getByText(/Mocked MDX/i)).toBeInTheDocument()
  })

  it('should navigate back when "Back" button is clicked', () => {
    render(<Post {...postMock} />)

    const backButton = screen.getByRole('button', { name: /back/i })
    fireEvent.click(backButton)

    expect(push).toHaveBeenCalledWith('/')
  })
})
