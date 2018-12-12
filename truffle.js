require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const networks = require('./src/networks');

module.exports = {
  networks: networks.reduce(
    (all, { id, name, mnemonic, rpcServer, accounts }) => {
      all[name] = {
        provider: () => new HDWalletProvider(mnemonic, rpcServer, 0, accounts),
        network_id: id
      };

      return all;
    },
    {}
  )
};
