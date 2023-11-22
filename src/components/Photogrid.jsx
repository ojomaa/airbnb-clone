import React from 'react'
import photogrid from '../assets/photo-grid.png'


export default function Photogrid() {
  return (
      <div className = 'grid'>
        <img src={photogrid} />
        <h1> Online Experiences </h1>
        <h6> Join unique interactive activities led by one-of-a-kind hosts-all without leaving home. </h6>
      </div>
  )
}