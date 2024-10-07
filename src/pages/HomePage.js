import React from 'react'
import Team from '../components/Team/Team'
import Banner from '../components/Banner/Banner'
import Gallery from '../components/Gallery/Gallery'
import GetEmail from '../components/GetEmail/GetEmail'
import ContactUs from '../components/ContactUs/ContactUs'
import Challenge from '../components/Challenge/Challenge'
import Marketing from '../components/Marketing/Marketing'
import Solutions from '../components/Solutions/Solutions'
import OurSuccess from '../components/OurSuccess/OurSuccess'
import Industries from '../components/Industries/Industries'
import AboutComponent from '../components/AboutComponent/AboutComponent'

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
      <GetEmail />
    </>
  )
}

export default HomePage