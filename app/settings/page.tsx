'use client'

import React, { useState, experimental_useOptimistic as useOptimistic } from 'react'

export default function Likes() {
  const [likes, setLikes] = useState(0)
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(likes)

  const submitToApi = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLikes(likes + 1)
  }

  const handleLikeClick = async () => {
    setOptimisticLikes(prev => prev + 1)
    // setOptimisticLikes(prev => prev + 2)
    await submitToApi()
  }

  return (
    <div>
      <p>Likes: {optimisticLikes}</p>
      <button onClick={handleLikeClick}>Like</button>
      <span>{likes}</span>
    </div>
  )
}
