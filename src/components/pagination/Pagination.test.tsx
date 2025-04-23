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
    expect(
      screen.getByRole('button', { name: /Página anterior/i })
    ).toBeDisabled()
    expect(
      screen.getByRole('button', { name: /próxima página/i })
    ).toBeEnabled()

    expect(container).toMatchSnapshot()
  })

  it('should call router.push with next page when "Próxima página" is clicked', () => {
    render(<Pagination {...paginationMock} />)

    fireEvent.click(screen.getByRole('button', { name: /próxima página/i }))

    expect(mockPush).toHaveBeenCalledWith('/mock-path?page=2')
    waitFor(() => {
      expect(screen.getByText(/2 de 10/i)).toBeInTheDocument()
    })
  })

  it('"Próxima página" should be disabled when current page is the last page', () => {
    render(<Pagination currentPage={10} totalPages={10} />)

    expect(
      screen.getByRole('button', { name: /Página anterior/i })
    ).toBeEnabled()
    expect(
      screen.getByRole('button', { name: /próxima página/i })
    ).toBeDisabled()
    expect(screen.getByText(/10 de 10/i)).toBeInTheDocument()
  })
})
