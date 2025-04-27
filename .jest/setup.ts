import '@testing-library/jest-dom'
import React from 'react'

jest.mock('next-contentlayer/hooks', () => ({
  useMDXComponent: () => () => React.createElement('div', null, 'Mocked MDX')
}))
