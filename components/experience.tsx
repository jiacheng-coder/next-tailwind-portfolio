'use client'

import React from 'react'
import SectionHeading from './section-heading'
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Experience() {
  const { ref } = useSectionInView('个人经历')

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <ol className='max-w-[53rem] relative border-l border-gray-200 dark:border-gray-700'>
        {experiencesData.map((item, index) => (
          <motion.li
            className='mb-10 ml-6 shadow-xl rounded-lg p-4'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: false,
            }}
            custom={index}
            key={item.title}
          >
            <h3 className='flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
              <text className='mr-2 w-4'>{item.icon}</text>
              <text>{item.title}</text>
              {index === experiencesData.length - 1 ? (
                <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>Latest</span>
              ) : (
                <span className='bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>{item.date}</span>
              )}
            </h3>
            <div className='flex items-center gap-2 justify-between'>
              <text>{item?.location}</text>
            </div>
            <p className='mb-1 text-base font-normal text-gray-500 dark:text-gray-400'>{item.description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
              {item.skills.map((tag, index) => (
                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
