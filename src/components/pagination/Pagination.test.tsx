import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { paginationMock } from '@/mocks'
import { Pagination } from '.'

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush
  }),
  usePathname: () => '/mock-path'
}))

describe('<Pagination />', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Pagination dataTestId="pagination" {...paginationMock} />
    )

    expect(screen.getByTestId('pagination')).toBeInTheDocument()
    expect(screen.getByText(/1 de 10/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /next/i })).toBeEnabled()

    expect(container).toMatchSnapshot()
  })

  it('should call router.push with next page when "next" is clicked', () => {
    render(<Pagination {...paginationMock} />)

    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    expect(mockPush).toHaveBeenCalledWith('/mock-path?page=2')
    waitFor(() => {
      expect(screen.getByText(/2 de 10/i)).toBeInTheDocument()
    })
  })

  it('"next" should be disabled when current page is the last page', () => {
    render(<Pagination currentPage={10} totalPages={10} />)

    expect(screen.getByRole('button', { name: /previous/i })).toBeEnabled()
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled()
    expect(screen.getByText(/10 de 10/i)).toBeInTheDocument()
  })
})
