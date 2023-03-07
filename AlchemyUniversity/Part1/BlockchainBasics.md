# Blockchains

## Purpose of a blockchain?
- To have a network of computers agree on a commmon state of data.
- No person should be able to control it entirely, and anyone should be able to participate.

## Smart Contract Blockchains
- Provide devs a way to decentralise where their code runs
- Code can become a public resource
- Code has no direct ownership, making it censorship resistant and verifiable

## Cryptographic Hash Functions
- Hash function is a function that takes an input of any size and returns a fixed size output

Specific types of hash functions we work with are Cryptographic Hash Functions. They have 5 min properties:
1. Deterministic - One specific input always maps to the same specific output
2. Pseudorandom - It is not possible to guess the output based on the output of similar inputs
3. One-way - If someone gives you a new output, you could not determine an input without guessing
4. Fast to Compute - It must be a quick calculation for a computer
5. Collision-resistant - The chance of a collision should be infinitesimally small

### Common issues
- How do all nodes agree on what the current and future state of user account balances and contract interactions is?
- Who gets to add new blocks/transactions to a chain? How do we know any blocks added are "valid"?
- How the heck are all of these things coordinated without any central actor in place?

The answer is consensus mechanisms, e.g. POW, POS.