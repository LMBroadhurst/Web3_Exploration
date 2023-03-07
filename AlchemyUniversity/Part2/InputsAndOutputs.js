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

        let totalInputUTXOs = 0
        this.inputUTXOs.forEach(value => totalInputUTXOs += value.amount)

        let totalOutputUTXOs = 0
        this.outputUTXOs.forEach(value => totalOutputUTXOs += value.amount)
    
        if (totalInputUTXOs < totalOutputUTXOs) {
            throw new Error('Not Enough Output UTXOs')
        }

        console.log(totalInputUTXOs, totalOutputUTXOs)
    }
}

module.exports = Transaction;