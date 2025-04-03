import { PropType } from './Grid.types'

export const Grid = ({
  children,
  cols = 1,
  gap = 8,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl
}: PropType) => {
  const extraSmall = xs ? `xs:grid-cols-${xs.cols} xs:gap-${xs.gap}` : ''
  const small = sm ? `sm:grid-cols-${sm.cols} sm:gap-${sm.gap}` : ''
  const medium = md ? `md:grid-cols-${md.cols} md:gap-${md.gap}` : ''
  const large = lg ? `lg:grid-cols-${lg.cols} lg:gap-${lg.gap}` : ''
  const extraLarge = xl ? `xl:grid-cols-${xl.cols} xl:gap-${xl.gap}` : ''
  const extraExtraLarge = xxl
    ? `2xl:grid-cols-${xxl.cols} 2xl:gap-${xxl.gap}`
    : ''

  const responsive = `${extraSmall} ${small} ${medium} ${large} ${extraLarge} ${extraExtraLarge}`

  return (
    <div className={`grid w-full grid-cols-${cols} gap-${gap} ${responsive}`}>
      {children}
    </div>
  )
}
