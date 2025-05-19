import React from 'react'

const Flipkart_iconText = ({icon,htext,url}) => {
  return (
    <div className='flex gap-3'>
      <div>{icon}</div>
      <img src={url}></img>
      <h1>{htext}</h1>
    </div>
  )
}

export default Flipkart_iconText
