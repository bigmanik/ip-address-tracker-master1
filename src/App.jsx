import { useState } from 'react'
import Header from './components/Header'
import InfoCard from './components/InfoCard'





function App() {


  return (
    <>
    <Header />
  <InfoCard
        ip="192.212.174.101"
        location="Brooklyn, NY 10001"
        timezone="UTC -05:00"
        isp="SpaceX Starlink"
      />
  
    </>
  )
}

export default App
