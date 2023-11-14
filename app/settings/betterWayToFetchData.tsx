/**
 * better way to fetch data
 */
'use client'

import React from 'react'

const baseUrl = 'http://127.0.0.1:4523/m1/1413582-0-default'

export default function Settings() {
  const controller = new AbortController()

  // method1: use AbortController api to cancel the overtime fetch request
  const handleClick = async () => {
    setTimeout(() => {
      controller.abort()
    }, 0)
    const res = await fetch(`${baseUrl}/getLabels`, { signal: controller.signal })
    const data = await res.json()
    console.log(data.data)
  }

  // method2: use Promise.race API to optimize user experience, but not to cancel the fetch request
  const handleClick2 = async () => {
    try {
      await Promise.race([
        fetch(`${baseUrl}/getLabels`),
        new Promise((_, reject) => {
          setTimeout(reject, 0)
        }),
      ])
    } catch (err) {
      console.log(`Failed to fetch`)
    }

    // combine methods
    try {
      await Promise.race([
        fetch(`${baseUrl}/getLabels`, { signal: controller.signal }),
        fetch(`${baseUrl}/users`, { signal: controller.signal }),
        new Promise((_, reject) => {
          setTimeout(reject, 0)
        }),
      ])
    } catch (err) {
      // when any fetch api fails, just cancel the other request
      controller.abort()
    }
  }

  return (
    <main className='h-[20rem] flex flex-col gap-2 items-center'>
      <h1>Settings</h1>
      <section>
        <button onClick={handleClick2} className='p-2 rounded-xl border text-white bg-blue-500 border-black/[0.7]'>
          fetchData
        </button>
      </section>
    </main>
  )
}
