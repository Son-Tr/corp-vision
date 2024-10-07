import React from 'react'
import DynamicBanner from '../components/DynamicBanner/DynamicBanner'
import ErrorComponent from '../components/ErrorComponent/ErrorComponent'

const ErrorPage = () => {
  return (
    <div>
      <DynamicBanner />
      <ErrorComponent />
    </div>
  )
}

export default ErrorPage