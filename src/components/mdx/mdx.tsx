import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Pre } from '@/components'

const components: MDXComponents = {
  h1: ({ className = '', children, ...remainingProps }) => (
    <h1 className={`text-5xl font-semibold ${className}`} {...remainingProps}>
      {children}
    </h1>
  ),

  pre: ({ className = '', children }) => (
    <Pre className={` ${className}`}>{children}</Pre>
  ),

  code: ({ className = '', children, ...remainingProps }) => (
    <code
      className={`text-md relative rounded bg-slate-700 px-1 py-0.5 text-indigo-400 ${className}`}
      {...remainingProps}
    >
      {children}
    </code>
  ),

  p: ({ className = '', children, ...remainingProps }) => (
    <p
      className={`leading-7 text-slate-100 has-[+p]:mb-4 ${className}`}
      {...remainingProps}
    >
      {children}
    </p>
  ),

  a: ({ className = '', children, ...remainingProps }) => (
    <a
      className={`underline underline-offset-4 transition-colors duration-200 hover:text-link ${className}`}
      {...remainingProps}
    >
      {children}
    </a>
  ),

  blockquote: ({ className = '', children, ...remainingProps }) => (
    <blockquote
      className={`my-4 border-l-2 border-slate-300 pl-4 font-normal italic text-slate-200 ${className}`}
      {...remainingProps}
    >
      {children}
    </blockquote>
  )
}

type MdxProps = {
  code: string
}

export const Mdx = ({ code = '' }: MdxProps) => {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
