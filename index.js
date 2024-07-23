import { Wallet, ethers } from 'ethers';

const message = "Hello World";

let wallet = Wallet.createRandom();

let address = await wallet.getAddress();

console.log("Wallet address: " + address);

let hash = ethers.utils.hashMessage(message);
console.log("Hash: " + hash);

let signature = await wallet.signMessage(message);
const { r, s, v } = ethers.utils.splitSignature(signature);

console.log("Signature: " + signature + ", v: " + v + ", r: " + r + ", s: " + s);

let recovered = ethers.utils.verifyMessage(message, signature);

console.log("Recovered: " + recovered);

console.assert(address, recovered);
