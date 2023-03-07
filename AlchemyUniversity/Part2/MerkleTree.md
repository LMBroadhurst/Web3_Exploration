## Merkle Trees
- Allow for a much more efficient way to store transactions on the blockchain.
- Merkle Tree hashes are stored.
- Store 1 piece of data rather than millions.


## Merkle Proofs
- Confirms the specific transactions that are represented by a leaf or branch within the merkle hash root.


## Summary
- Space and computationally efficient
- Good for scalability and decentralization
- Commit merkle root hash rather than a ton of transactions
  

## Trees in Ethereum
- Use a variation called a 'radix' or 'Patricia Trie'
- Patricia Tree + Merkle Tree = Patricia Merkle Tree
- Trie comes from the word retrieval
- Efficient for reading data but also for writing data
- PATRICIA -- Practical Algorithm To Retrieve Information Coded In Alphanumeric