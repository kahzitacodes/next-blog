import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.(test|spec).ts(x)?',
    '!src/app/**',
    '!src/types/**',
    '!src/styles/**',
    '!src/utils/**',
    '!src/config/**',
    '!src/mocks/**',
    '!src/components/**/*.styles.ts',
    '!src/components/**/*.types.ts',
    '!src/components/index.ts',
    '!src/components/**/index.ts',
    '!src/components/mdx/**'
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  testMatch: [
    '<rootDir>/src/**/*.test.{ts,tsx}',
    '<rootDir>/src/**/*.spec.{ts,tsx}'
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest'
  }
}

export default createJestConfig(config)
