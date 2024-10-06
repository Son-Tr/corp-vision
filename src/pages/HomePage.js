import React from 'react'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/Gallery/Gallery'
import Challenge from '../components/Challenge/Challenge'
import Marketing from '../components/Marketing/Marketing'
import Solutions from '../components/Solutions/Solutions'
import OurSuccess from '../components/OurSuccess/OurSuccess'
import Industries from '../components/Industries/Industries'
import AboutComponent from '../components/AboutComponent/AboutComponent'
import Team from '../components/Team/Team'
import ContactUs from '../components/ContactUs/ContactUs'

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutComponent />
      <Challenge />
      <Industries />
      <Gallery />
      <OurSuccess />
      <Marketing />
      <Solutions />
      <Team />
      <ContactUs />
    </>
  )
}

export default HomePage