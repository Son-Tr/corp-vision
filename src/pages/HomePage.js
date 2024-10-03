import React from 'react'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/Gallery/Gallery'
import Challenge from '../components/Challenge/Challenge'
import OurSuccess from '../components/OurSuccess/OurSuccess'
import Industries from '../components/Industries/Industries'
import AboutComponent from '../components/AboutComponent/AboutComponent'
import Marketing from '../components/Marketing/Marketing'

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutComponent />
      <Challenge />
      <Industries />
      <Gallery />
      <OurSuccess />
      <Marketing/>
    </>
  )
}

export default HomePage