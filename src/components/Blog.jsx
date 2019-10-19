import React from 'react'
import LastestPosts from './LastestPosts'
import OlderPosts from './OlderPosts'
import GetInTouch from './GetInTouch'

export default function Blog() {
  return (
    <div>
      <LastestPosts />
      <OlderPosts />
      <GetInTouch />
    </div>
  )
}
