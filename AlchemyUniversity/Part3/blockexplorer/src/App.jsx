import CurrentBlock from './components/CurrentBlock';
import { Network, Alchemy } from "alchemy-sdk";
import './App.css';
import WalletSearchInput from './components/WalletSearchInput';
import CurrentGas from './components/CurrentGas';
import CurrentPrice from './components/CurrentPrice';
import React, {useEffect, useState} from 'react'

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);


function App() {

  const [ethInfo, setEthInfo] = useState({});

  const getEthInfo = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/ethereum").then(response => response.json())
    console.log(response)
    setEthInfo(response)
  }

  useEffect(() => {
    getEthInfo()
  }, [])

  if (!ethInfo) {
    return <div>Loading...</div>
  }

  return (
  <body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 800}}>

    <header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <img src={`${ethInfo?.image?.small}`} alt="Eth Logo" />
        <span>ETH Explorer</span>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
        <CurrentGas alchemy={alchemy} />
        <CurrentPrice alchemy={alchemy} price={ethInfo?.market_data?.current_price?.usd}/>
      </div>
    </header>

    <div style={{display: 'flex', flexDirection: 'column'}}>
      <CurrentBlock alchemy={alchemy} />
      <WalletSearchInput alchemy={alchemy} />
    </div>

    <footer style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <span>Lewis Broadhurst</span>
      <span>Thanks to the CoinGecko API for the ETH related data.</span>
    </footer>
  </body>

    
  );
}

export default App;
