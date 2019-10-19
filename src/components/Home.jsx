import React from 'react'
import ProductSection from './ProductSection'
import HomeBlog from './HomeBlog'
import GetInTouch from './GetInTouch'
import KeyPartners from './KeyPartners'
import WhatWeOffer from './WhatWeOffer2'

export default function Home() {
  return (
    <div>
      <WhatWeOffer />
      <ProductSection />
      <KeyPartners />
      <HomeBlog />
      <GetInTouch />
    </div>
  )
}
