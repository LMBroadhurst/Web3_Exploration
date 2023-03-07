import React from 'react'

const CurrentPrice = ({price}) => {
  return (
    <div>Current Price: {price ? `$${price}` : 'loading...'}</div>
  )
}

export default CurrentPrice