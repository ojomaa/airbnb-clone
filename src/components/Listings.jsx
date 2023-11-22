import React from 'react'


export default function Listings(props) {
  let badgeText
  if(props.openSpots === 0) {
    badgeText = 'SOLDOUT'
  } else if (props.location === "Online") {
    badgeText = 'ONLINE'
  } else {
    badgeText = false
  }
  console.log(props)
  
  return (
    <div className="card">
      {badgeText != false && <div className="card-badge">{badgeText}</div>}
      <img src= {`../src/assets/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
          <img src="../src/assets/star.png" className="card--star" />
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
  </div>
  )
}