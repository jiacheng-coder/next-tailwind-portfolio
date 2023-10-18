'use client'
import React, { useState, useContext, createContext } from 'react'
import { links } from '@/lib/data'

type sectionNameType = (typeof links)[number]['name']

type activeSectionContextType = {
  activeSection: sectionNameType
  setActiveSection: React.Dispatch<React.SetStateAction<sectionNameType>>
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
  const [activeSection, setActiveSection] = useState<sectionNameType>('Home')

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}
