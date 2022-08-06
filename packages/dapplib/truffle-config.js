require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain slow journey arena orchard ski'; 
let testAccounts = [
"0x55c5a59f9dd5f57e6949e583ce9ba32bd81d2749efe5001c06fbd450386b4561",
"0x99b3eeb95210130eb94e2425c9deb869163ea9657e98159f01f0ac13f789acde",
"0x7370039069b658e9a48957f2359a1db8192d7e6bee2fc13864e046dc8f035f35",
"0x6a01c2172d5ae1da50c073f6c025ea47665b0481dda2fef4269dc50200ad1ab5",
"0xf93039cd330e8d690e850772cb26c1bfb633c4a27b2007c2af5640c266ee630f",
"0x06e9598619af73a427497414d50e9dff43ae6fbd1c9d2aaea342b30080f9543c",
"0x9fe794167e6fdff08ba87f9b05aff5c7fde92d095552e755edf669f69b1eed0f",
"0xa587b439d0084366343d624eb9024adf28808375e7c92eeec6a168fafdc61d9c",
"0x7aed4ee5ee431068753f6d2869ae254d6f2e1b270faf91aafb69a84112856757",
"0x6761fe092bd7ffd512654a8c0643d452831ceb27a3dd37d4aafb3157ffdda0fe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

