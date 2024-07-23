import { Wallet, ethers } from 'ethers';


let wallet = new Wallet("ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");

let address = await wallet.getAddress();
console.log("Wallet address: " + address);
console.log("Private key: " + wallet.privateKey);

const message = "Hello World";

let hash = ethers.utils.hashMessage(message);
console.log("Hash: " + hash);

let signature = await wallet.signMessage(message);
const { r, s, v } = ethers.utils.splitSignature(signature);

console.log("Signature: " + signature + ", v: " + v + ", r: " + r + ", s: " + s);

let recovered = ethers.utils.verifyMessage(message, signature);

console.log("Recovered: " + recovered);

console.assert(address, recovered);
