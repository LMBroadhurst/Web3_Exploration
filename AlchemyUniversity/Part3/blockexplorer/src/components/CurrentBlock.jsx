import React, { useEffect, useState } from 'react'


const CurrentBlock = ({alchemy}) => {
    const [blockNumber, setBlockNumber] = useState();

    useEffect(() => {
        async function getBlockNumber() {
            setBlockNumber(await alchemy.core.getBlockNumber());
        }

        getBlockNumber();
    });

  return (
    <section>
      <h2>Current Block</h2>
      <p>Block Number: {blockNumber}</p>
    </section>
  )
}

export default CurrentBlock