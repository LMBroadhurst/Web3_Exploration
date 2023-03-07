const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    publicKeyFirstByte = publicKey.slice(0, 1)
    kec256Hash = keccak256(publicKey.slice(1))
    
    return kec256HashLast20Bytes = kec256Hash.slice(-20)
}

module.exports = getAddress;