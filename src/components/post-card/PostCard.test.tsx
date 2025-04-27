import { render, screen, within } from '@/utils/tests/custom-render'
import { PostCard } from './PostCard'
import { postMock } from '@/mocks'
import { formatDate } from '@/utils/helpers'

describe('<Post />', () => {
  it('should render successfully', () => {
    const { container } = render(<PostCard {...postMock} />)
    expect(screen.getByAltText(postMock.$frontMatter.title)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: postMock.$frontMatter.title })
    ).toBeInTheDocument()
    expect(screen.getByText(postMock.$frontMatter.description))

    expect(container).toMatchSnapshot()
  })

  it('should render tags correctly', () => {
    render(<PostCard {...postMock} />)

    const tagList = screen.getByRole('list', {
      name: /tags/i
    })
    const { getAllByRole } = within(tagList)
    const tags = getAllByRole('listitem')

    expect(tags.length).toBe(2)
  })

  it('should render the date and reading time correctly', () => {
    render(<PostCard {...postMock} />)

    const formattedDate = formatDate(postMock.$frontMatter.date)
    const readingTime = postMock.$readingTime
    const minuteText = readingTime <= 1 ? 'minuto' : 'minutos'
    const fullText = `${formattedDate} • ${readingTime.toString()} ${minuteText} de leitura`

    expect(screen.getByText(fullText)).toBeInTheDocument()
  })
})
