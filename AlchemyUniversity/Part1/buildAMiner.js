const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction)
}

function mine() {
    // TODO: mine a block
    blockId = blocks.length

    block = {
        id: blockId,
        transactions: []
    }

    mempoolLength = mempool.length

    for (let i = 0; i < mempoolLength; i++) {
        if (i < MAX_TRANSACTIONS) {
            block.transactions.push(mempool[0])
            mempool.shift()
        }
    }

    block['nonce'] = 0


    while(BigInt(`0x${SHA256(JSON.stringify(block))}`) > TARGET_DIFFICULTY){
        block.nonce += 1
    }

    hashedBlock = SHA256(JSON.stringify(block))

    block['hash'] = hashedBlock

    blocks.push(block)

    return hashedBlock
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};