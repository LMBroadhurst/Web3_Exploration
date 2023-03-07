import React, { useEffect, useState } from 'react'

const CurrentGas = ({alchemy}) => {

    const [gasPrice, setGasPrice] = useState(null)

    useEffect( () => {
        alchemy.core.getGasPrice().then((gasPrice) => setGasPrice(gasPrice))
    }, [alchemy.core])
    
  return (
    <div>Current Gas Price: {gasPrice ? `${gasPrice.toString().slice(0, 2)} Gwei` : 'loading...'}</div>
  )
}

export default CurrentGas