import { Link } from '@/components'
import Image from 'next/image'

export const AboutContent = () => {
  return (
    <main>
      <h1 className="mb-8 text-3xl font-bold">About me</h1>

      <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl md:h-[500px]">
        <Image
          src="/assets/images/me.png"
          fill
          alt="Photo"
          className="object-cover object-center"
        />
      </div>
      <p className="mb-2 font-normal leading-relaxed">
        I&apos;m a front-end developer with 10 years of experience in crafting
        user-friendly interfaces and meaningful digital experiences. My
        background in Digital Design reflects a lifelong passion for art,
        design, and technology — a combination that continues to shape how I
        approach code and creativity.
      </p>
      <p className="mb-2 font-normal leading-relaxed">
        I started my career as a UI/UX designer, where I also gained hands-on
        experience with HTML5, CSS3, SASS, Bootstrap, Git, and Github. Over
        time, I felt the urge to dive deeper into the technical side of things,
        which led me to complete a full-time web development bootcamp at{' '}
        <Link
          href="https://www.ironhack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IronHack
        </Link>{' '}
        and fully embrace front-end development.
      </p>
      <p className="mb-2 font-normal leading-relaxed">
        Today, I’m focused on writing clean, accessible, and well-structured
        code, while also expanding my knowledge of back-end technologies to
        become a more well-rounded developer.
      </p>
      <p className="font-normal leading-relaxed">
        Outside of work, you’ll probably find me exploring new places, sketching
        or painting, or diving into video games — all of which keep my
        imagination sharp and my creativity flowing.
      </p>
    </main>
  )
}
