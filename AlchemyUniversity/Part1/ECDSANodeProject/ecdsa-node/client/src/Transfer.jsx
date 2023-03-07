import { useState } from "react";
import server from "./server";

function Transfer({ privateKey, setPrivateKey, address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    if (
      (address === '0x1a52fea0447c85f9707f' && privateKey === '63b661b91f36e04184f19dd494e47ba0472302855aa2a3978f17d3d94c970237') 
      || (address === '0xa91bf157ead8b57b5194' && privateKey === '6acd4639c332e0f999f2bd55ee4632a074ea8318e65e8b25a7aceb4b0b518c70')
      || (address === '0x483ca6038037ed05236d' && privateKey === '73fb1041354596c4101208eac18bb31bfecbb83df3746390a2bc4e847366d565')
      ) { 
        try {
          const {
            data: { balance },
          } = await server.post(`send`, {
            sender: address,
            amount: parseInt(sendAmount),
            recipient,
          });
          setBalance(balance);
        } catch (ex) {
          alert(ex.response.data.message);
        }
    }
    else {
      return alert("Please enter a valid address and private key")
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Private Key
        <input 
          placeholder="Type in your private key to sign the transaction" 
          value={privateKey} 
          onChange={setValue(setPrivateKey)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
