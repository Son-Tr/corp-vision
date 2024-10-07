import React from 'react'
import Industries from '../components/Industries/Industries'
import OurServices from '../components/OurServices/OurServices'
import DynamicBanner from '../components/DynamicBanner/DynamicBanner'

const ServicesPage = () => {
  return (
    <div>
      <DynamicBanner />
      <OurServices />
      <Industries />
    </div>
  )
}

export default ServicesPage