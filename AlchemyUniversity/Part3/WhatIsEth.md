# Ethereum is a deterministic and unbound state machine, consisting of a globally accessible singleton state and a VM that applies changes to that state.
- Open source, globally decentralized
- Exectures programs called smart contracts

### Nonce - Keeps a count of all transactions sent from a particular address.
- Nonce = number being used once

## Contract Accounts
- Account where smart contracts are stored.
- Written in Solidity/Vyper

## Use cases
1. Ownership records of a House, Car, asset, etc.
2. Decentralised code.
3. Decentralised Finance.
4. DAOs.

## Transactions
- ETH nodes contain a JSON_RPC interface which allows us to send JSON-RPC requests.
- Here we can read or write.
- ETH is a transaction based machine, they are the only way that the state of ETH can be changed.

# An ETH transaction refers to an action initiated by an EOA (Externally owned account)
- Transactions are collected into blocks.
- Each block collects different transactions from time x, x + 1...
- These blocks are linked into a chain of blocks representing the transactions made and the state of the system, i.e. blockchain.