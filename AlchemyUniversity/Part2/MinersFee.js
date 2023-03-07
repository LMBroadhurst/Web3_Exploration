class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs
        this.outputUTXOs = outputUTXOs
        this.fee = 0
    }

    execute() {

        const spentTransactions = this.inputUTXOs.filter(UTXO => UTXO.spent === true)

        if (spentTransactions.length > 0) {
            throw new Error('Already Spent UTXO')
        }

        let totalInputUTXOs = 0
        this.inputUTXOs.forEach(TXO => totalInputUTXOs += TXO.amount)

        let totalOutputUTXOs = 0
        this.outputUTXOs.forEach(TXO => totalOutputUTXOs += TXO.amount)
    
        if (totalInputUTXOs < totalOutputUTXOs) {
            throw new Error('Not Enough Output UTXOs')
        }

        console.log(totalInputUTXOs, totalOutputUTXOs)

        this.inputUTXOs.forEach(TXO => TXO.spent = true)

        this.fee = totalInputUTXOs - totalOutputUTXOs

    }
}

module.exports = Transaction;