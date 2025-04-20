import '@testing-library/jest-dom'
const React = require('react')

jest.mock('next-contentlayer/hooks', () => ({
  useMDXComponent: () => () => React.createElement('div', null, 'Mocked MDX')
}))
