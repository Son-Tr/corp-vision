import React from 'react'
import Industries from '../components/Industries/Industries'
import OurServices from '../components/OurServices/OurServices'
import WorkTogether from '../components/WorkTogether/WorkTogether'
import DynamicBanner from '../components/DynamicBanner/DynamicBanner'

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