import Image from 'next/image'
import Link from 'next/link'

import { Tag } from '../tag'

import * as S from './PostCard.styles'

export const PostCard = () => {
  return (
    <S.PostContainer>
      <Link href="#">
        <S.PostImage>
          <Image
            src="/assets/images/image.png"
            fill
            alt="title"
            className="object-cover object-center transition-all hover:scale-105"
            priority
          />
        </S.PostImage>
      </Link>
      <S.TagsWrap>
        {['TS', 'React', 'Next.js'].map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </S.TagsWrap>

      <S.Time>15 de maio de 2025 • 3 minutos de leitura</S.Time>

      <Link href="#" className="[&>h3]:hover:text-link [&>p]:hover:text-white">
        <S.Title>
          O que é Dependency Injection e como aplicar no REact.js?
        </S.Title>
        <S.Summary>
          Vamos aprender como aplicar esse conceiro tão importante no React.js!
        </S.Summary>
      </Link>
    </S.PostContainer>
  )
}
