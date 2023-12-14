'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('关于我')

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      {/* <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in <span className='font-medium'>ChongQing University</span>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className='font-medium'>front-end web development</span>. <span className='italic'>My favorite part of programming</span> is the problem-solving aspect. I{' '}
        <span className='underline'>love</span> the feeling of finally figuring out a solution to a problem. My core stack is{' '}
        <span className='font-medium'>TypeScript, Vue 2 & 3, React, Next.js and Node.js</span>. I am also familiar with TypeScript. I am always looking to learn new technologies. I am currently
        looking for a <span className='font-medium'>full-time position</span> as a front-end developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy listening music, watching movies, playing basketball and climbing mountains. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>. I am currently learning about <span className='font-medium'>psychology and philosophy</span>. I'm also learning how to play the
        guitar.
      </p> */}
      <SectionHeading>关于我</SectionHeading>
      <p className='mb-3'>
        我目前正在攻读 <span className='font-medium'>重庆大学</span> 的本科学位。大二暑假，我参加了字节跳动第四届前端训练营，学习了{' '}
        <span className='font-medium'>前端相关的开发技术，正式走上编程的道路</span>。 <span className='italic'>在编程中，我最喜欢的部分</span> 是发现问题并解决问题的过程。我{' '}
        <span className='underline'>热爱</span> 各种技术，喜欢把一个软件从构思到实现的整个过程，那让我兴奋并让我得以充分发挥我的创造力。 我目前的技术栈包括{' '}
        <span className='font-medium'>TypeScript、Vue 2 & 3、React、Next.js</span>（前端方向），以及<span className='font-medium'>Node.js、MySQL、Docker、Nginx</span>
        （后端方向）。同时我也愿意学习一切能让当前项目受益的新技术。目前正在寻找一份 <span className='font-medium'>全职前端（or 全栈）开发的职位</span>。
      </p>

      <p>
        <span className='italic'>当我不写代码时</span>，我喜欢<span className='font-medium'>听音乐、看电影、跑步、打球和爬山</span>。目前我的日常是{' '}
        <span className='font-medium'>看书、跑步以及主机游戏。</span>
      </p>
    </motion.section>
  )
}
