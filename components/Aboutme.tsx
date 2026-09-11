'use client'
import ScrollReveal from './ui/ScrollReveal'

const Aboutme = () => {
  return (
    <section className="flex flex-col gap-8 pb-12 pt-32 px-6 max-w-7xl mx-auto relative">
      <h1 className='absolute top-15 text-6xl z-50 font-bold left-0'>About Me</h1>
    <div className='text-3xl md:text-5xl lg:text-6xl text-gray-200 leading-tight md:leading-snug font-bold tracking-tight'>

<ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
>
Hi, I’m Piyush, a Full Stack Developer and Computer Science engineer passionate about building scalable, high-performance web applications. With a strong foundation in Data Structures and Algorithms (DSA) and System Design, I approach software development with a deep focus on optimization and architecture. From crafting responsive front-end interfaces using React and Tailwind CSS to architecting resilient backends, I thrive on solving complex technical problems and delivering clean, efficient, and maintainable code.

</ScrollReveal>
    </div>
    </section>
  )
}

export default Aboutme