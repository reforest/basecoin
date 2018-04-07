import lotion from 'lotion';
import coins from 'coins';

let client;
const APP_GCI = '';
lotion.connect().then((c)=>{
  client = c;
});

let wallet = coins.wallet(client)

// wallet methods:
let address = wallet.getAddress()
console.log(address) // 'OGccsuLV2xuoDau1XRc6hc7uO24'

// let balance = await wallet.getBalance()
// console.log(balance) // 20

// let result = await wallet.send('04oDVBPIYP8h5V1eC1PSc/JU6Vo', 5)
// console.log(result) // { height: 42 }