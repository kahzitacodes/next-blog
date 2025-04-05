import { render, screen } from '@testing-library/react'
import { navigationMock } from '@/mocks/navigation'
import { Footer } from '.'
import { siteConfig } from '@/config'

describe('<Footer />', () => {
  it('should render successfully', () => {
    const { container } = render(<Footer items={navigationMock} />)

    expect(screen.getByText(siteConfig.title)).toBeInTheDocument()
    expect(screen.getByTestId(/logo/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Social/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sitemap/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
