import React from 'react'
import AboutIconSection from './AboutIconSection'
import CoreValues from './CoreValues'
import OurStory from './OurStory'
import OurVison from './OurVision'

export default function About() {
  return (
    <div>
      <OurStory />
      <OurVison />
      <AboutIconSection />
      <CoreValues />
    </div>
  )
}
