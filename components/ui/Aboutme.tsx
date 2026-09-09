'use client'
import ScrollReveal from './ScrollReveal'

const Aboutme = () => {
  return (
    <section className="flex flex-col gap-8 pb-12 pt-32 px-6 max-w-4xl mx-auto">
    <div className='text-3xl md:text-5xl lg:text-6xl text-gray-200 leading-tight md:leading-snug font-bold tracking-tight'>
        

<ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
>
 About Me

I’m Piyush — a Frontend Engineer who enjoys turning ideas into polished, production-ready web experiences.

My core stack is React.js, Next.js, TypeScript, and JavaScript**, with a strong focus on responsive design, performance, accessibility, and scalable frontend architecture. I care about more than simply making a website work — I want it to feel fast, intuitive, and thoughtfully designed.

From building API-driven applications and interactive dashboards to AI-powered products and full-stack web experiences, I enjoy taking a project from an initial concept to a functional, refined product.

I’m a continuous learner who believes great developers are built through curiosity, consistency, and a willingness to solve problems that initially seem difficult.

Currently seeking a Frontend Engineering opportunity where I can build meaningful products, contribute to a strong team, and keep raising the standard of what I can create.

</ScrollReveal>
    </div>
    </section>
  )
}

export default Aboutme