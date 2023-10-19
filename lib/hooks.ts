'use client'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '@/lib/types'

// when scrolling, we need to track the active section and judge if it's in the view.
// we use the ref to track the html element, and when the element is in the view and timeOfLastClick > 1000ms,
// we call the setActiveSection function to change activeSection state
// The change of activeSection will influence the ui in the header component throw react-context
export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}
