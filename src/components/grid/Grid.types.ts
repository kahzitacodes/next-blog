export type PropType = {
  dataTestid?: string
  children: React.ReactNode
  cols?: number
  gap?: number
  xs?: SizeProps
  sm?: SizeProps
  md?: SizeProps
  lg?: SizeProps
  xl?: SizeProps
  xxl?: SizeProps
}

export type SizeProps = {
  cols?: number
  gap?: number
}
