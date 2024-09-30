import React from 'react'
import Banner from '../components/Banner/Banner'
import Challenge from '../components/Challenge/Challenge'
import Industries from '../components/Industries/Industries'
import AboutComponent from '../components/AboutComponent/AboutComponent'
import Gallery from '../components/Gallery/Gallery'

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutComponent />
      <Challenge />
      <Industries />
      <Gallery/>
    </>
  )
}

export default HomePage