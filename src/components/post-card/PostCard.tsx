'use client'

import { formatDate } from '@/utils/helpers'
import { Tag } from '../tag'

import { PropTypes } from './PostCard.types'
import * as S from './PostCard.styles'

export const PostCard: React.FC<PropTypes> = (props) => {
  const {
    readingTime,
    slug,
    frontMatter: { description, image, title, date, tags }
  } = props

  return (
    <S.PostContainer>
      <S.PostImageContainer href={slug}>
        <S.PostImage src={image} fill alt={title} priority />
      </S.PostImageContainer>

      {tags ? (
        <S.TagsWrap>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </S.TagsWrap>
      ) : null}

      <S.Time>
        {formatDate(date)} • {readingTime.toString()} minuto
        {readingTime <= 1 ? '' : 's'} de leitura
      </S.Time>

      <S.Content href="#" className="">
        <S.Title>{title}</S.Title>
        <S.Summary>{description}</S.Summary>
      </S.Content>
    </S.PostContainer>
  )
}
