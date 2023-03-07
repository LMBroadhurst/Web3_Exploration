const secp = require("ethereum-cryptography/secp256k1")
const { toHex } = require("ethereum-cryptography/utils")

const privateKey = secp.utils.randomPrivateKey()
const publicKey = secp.getPublicKey(privateKey)

console.log(`Public Key: ${toHex(publicKey).slice(1).slice(-20)} -- Private Key: ${toHex(privateKey)}`)

// Generated Public/Private Keys

// 1: 0x1a52fea0447c85f9707f / 63b661b91f36e04184f19dd494e47ba0472302855aa2a3978f17d3d94c970237
// 2: 0xa91bf157ead8b57b5194 / 6acd4639c332e0f999f2bd55ee4632a074ea8318e65e8b25a7aceb4b0b518c70
// 3: 0x483ca6038037ed05236d / 73fb1041354596c4101208eac18bb31bfecbb83df3746390a2bc4e847366d565