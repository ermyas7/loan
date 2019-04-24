import React from 'react'
import loading from '../images/loader.gif'

const Loader = () => {
  return (
    <div style={loaderContainer}>
      <img src={loading} alt='loader' style={loaderImage}/>
    </div>
  )
}

const loaderContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const loaderImage = {
    display: 'inline-block',
    width: '30px'
}

export default Loader
