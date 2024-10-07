import React from 'react'
import Industries from '../components/Industries/Industries'
import OurServices from '../components/OurServices/OurServices'
import DynamicBanner from '../components/DynamicBanner/DynamicBanner'
import WorkTogether from '../components/WorkTogether/WorkTogether'

const ServicesPage = () => {
  return (
    <div>
      <DynamicBanner />
      <OurServices />
      <Industries />
      <WorkTogether/>
    </div>
  )
}

export default ServicesPage