import React from 'react'
import Banner from '../components/Banner/Banner'
import AboutComponent from '../components/AboutComponent/AboutComponent'
import Challenge from '../components/Challenge/Challenge'

const HomePage = () => {
  return (
    <div className=''>
      <Banner/>
      <AboutComponent/>
      <Challenge/>
    </div>
  )
}

export default HomePage