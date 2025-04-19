'use client'
import Image from 'next/image'

import { formatDate } from '@/utils/helpers'

import { Mdx } from '../mdx'
import { Button } from '../button'

import { PropTypes } from './Post.types'
import * as S from './Post.styles'
import { useRouter } from 'next/navigation'

export const Post = (props: PropTypes) => {
  const router = useRouter()

  const {
    body,
    $readingTime,
    $frontMatter: { date, description, image, title }
  } = props

  return (
    <S.Wrapper {...props}>
      <Button onClick={() => router.push('/')} $animate icon="ArrowLeft">
        Voltar
      </Button>

      <S.ImageContainer>
        <Image
          src={image}
          fill
          alt={title}
          priority
          className="rounded-xl object-cover object-center"
        />
      </S.ImageContainer>

      <S.Content>
        <S.PostDetails>
          {formatDate(date)} • {$readingTime.toString()} minuto
          {$readingTime <= 1 ? '' : 's'} de leitura
        </S.PostDetails>

        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>

        <Mdx code={body.code} />
      </S.Content>
    </S.Wrapper>
  )
}
