import React, { useState } from 'react'
const {utils, BigNumber} = require('ethers');

const WalletSearchInput = ({alchemy}) => {

  const [wallet, setWallet] = useState('')
  const [balance, setBalance] = useState(0)

  const handleChange = (e) => {
    setWallet(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alchemy.core.getBalance(wallet, "latest").then(response => {
      setBalance(response)
      console.log(response)
    });
  }

  const formatEth = () => {
    const bigNumberBalance = BigNumber.from(balance)
    return utils.formatEther(bigNumberBalance)
  }


  return (
    <section>
        <form>
            <input type="text" placeholder="Search for an ETH wallet" onChange={handleChange}/>
            
            <button onClick={handleSubmit}>Search</button>
        </form>

        <div>
            <span>Eth balance: {balance ? formatEth : '...'}</span> 
        </div>
    </section>
  )
}

export default WalletSearchInput