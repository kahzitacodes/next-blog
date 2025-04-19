import { render } from '@testing-library/react'

const customRender = (ui: React.ReactElement) => render(ui)

export * from '@testing-library/react'
export { customRender as render }
