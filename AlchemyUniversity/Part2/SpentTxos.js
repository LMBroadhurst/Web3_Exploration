class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs
        this.outputUTXOs = outputUTXOs
    }

    execute() {

        const spentTransactions = this.inputUTXOs.filter(UTXO => UTXO.spent === true)

        if (spentTransactions.length > 0) {
            throw new Error('Already Spent UTXO')
        }
    
    }
}

module.exports = Transaction;