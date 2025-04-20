import Link from 'next/link'
import { Icon } from '@/components'

import { PropTypes } from './List.types'
import * as S from './List.styles'

export const List = ({ items, ...remainingProps }: PropTypes) => (
  <S.Wrapper {...remainingProps}>
    {items.map((item) => (
      <S.ListItem key={item.title}>
        <Link href={item.href} className="flex justify-center gap-3">
          {item?.icon ? (
            <S.ListItemIcon>
              <Icon name={item.icon} />
            </S.ListItemIcon>
          ) : null}
          {item.title}
        </Link>
      </S.ListItem>
    ))}
  </S.Wrapper>
)
