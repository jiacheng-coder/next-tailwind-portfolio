'use client'
import React, { useState, useContext, createContext } from 'react'
import type { SectionName } from '@/lib/types'

type activeSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<activeSectionContextType | null>(null)

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error('useActiveSectionContext must be used within a ActiveSectionProvider')
  }
  return context
}

export default function ActiveSectionContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName>('首页')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}
