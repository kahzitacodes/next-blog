import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import '../../styles/mdx.css'

const components: MDXComponents = {
  h1: ({ className = '', children, ...remainingProps }) => (
    <h1 className={`text-4xl font-bold ${className}`} {...remainingProps}>
      {children}
    </h1>
  ),

  pre: ({ className = '', children, ...remainingProps }) => (
    <pre
      className={`text-md mb-4 mt-6 overflow-x-auto rounded-lg bg-gray-400 py-4 ${className}`}
      {...remainingProps}
    >
      {children}
    </pre>
  ),

  code: ({ className = '', children, ...remainingProps }) => (
    <code
      className={`text-md relative rounded ${className}`}
      {...remainingProps}
    >
      {children}
    </code>
  )
}

type MdxProps = {
  code: string
}

export const Mdx = ({ code = '' }: MdxProps) => {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
