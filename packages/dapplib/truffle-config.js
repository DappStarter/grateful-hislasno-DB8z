require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember artwork inflict glide fresh system'; 
let testAccounts = [
"0x16e67ec4f18996645e1b9db8b0b637066c20ca49f24da1c82bd9228ee639935c",
"0xb81c6d8e1a9c2e02ba0c05ffe38b90f3fae45785ce10a7713a3012cc55ebf0a1",
"0xd1f936a8764e3d84de2972789a0318d3dd06850078451e09c9ce74138b46d845",
"0x446bb33e338100a427387530b2f038667717d246ebd29fbfa4830d9052474552",
"0xbdd7bbd7a0f1e2a35cb7d5e013ecdefc5f88561d40d240bce678ee83554378c6",
"0x0e26c10375fc1df39cd338bd1c2cb163e3220598c1393d6c09733f9edf3281db",
"0xadb91bd30a8d8f41b3bdd5b8a41a5f5671422eede3555bc04dd2841965adb222",
"0x05b7da3a46422eaa7ca70fde82fe611e262ed6dc61687ef1c96de122c9614988",
"0xdd50467bd46b0ad7f3baf793489d903f14a182f9b3e98c5255a017475eb532b7",
"0x9d0e634c0560dac1d6b46240322fc553b2919371a636fb9e0e1814b9f150275d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


