'use client'

import React from 'react'
import { projectsData } from '@/lib/data'
import Project from './project'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects')

  return (
    <section id='projects' ref={ref} className='scroll-mt-28 mb-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
