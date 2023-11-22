import React from 'react'
import Listings from './components/Listings'
import Navbar from './components/Navbar'
import Photogrid from './components/Photogrid'
import listingData from './data.js'

const dataElements = listingData.map(data => {
  return <Listings 
    key={data.id}
    {...data}
  />
} )

export default function App() {
  return (
    <>
      <Navbar />
      <Photogrid />
      <div className= 'cards-list'>
        {dataElements}
      </div>
    </>
  )
}