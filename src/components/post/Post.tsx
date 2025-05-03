'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { formatDate } from '@/utils/helpers'

import { Icon, Mdx } from '@/components'
import { Button } from '../button'

import { PropTypes } from './Post.types'
import * as S from './Post.styles'
import { Tag } from '../tag'

export const Post = (props: PropTypes) => {
  const router = useRouter()

  const {
    body,
    $readingTime,
    $frontMatter: { date, description, image, title, tags }
  } = props

  return (
    <S.Wrapper {...props}>
      <S.Heading>
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          $animate
          icon="ArrowLeft"
        >
          Back
        </Button>
        <S.PostTitle>{title}</S.PostTitle>

        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          {tags ? (
            <S.TagsWrap aria-label="tags">
              {tags.map((tag) => (
                <li key={tag}>
                  <Tag label={tag} />
                </li>
              ))}
            </S.TagsWrap>
          ) : null}

          <S.PostDetails>
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={20} /> {$readingTime.toString()} min
            </span>
            <span>•</span>
            {formatDate(date)}{' '}
          </S.PostDetails>
        </div>
      </S.Heading>

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
        <S.PostDescription>{description}</S.PostDescription>
        <Mdx code={body.code} />
      </S.Content>
    </S.Wrapper>
  )
}
