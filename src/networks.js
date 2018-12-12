const networks = [];

if (process.env.ETH_NET0_NAME) {
  networks.push({
    id: process.env.ETH_NET0_ID,
    name: process.env.ETH_NET0_NAME,
    rpcServer: process.env.ETH_NET0_RPC_SERVER,
    mnemonic: process.env.ETH_NET0_MNEMONIC,
    accounts: process.env.ETH_NET0_ACCOUNTS
  });
}

if (process.env.ETH_NET1_NAME) {
  networks.push({
    id: process.env.ETH_NET1_ID,
    name: process.env.ETH_NET1_NAME,
    rpcServer: process.env.ETH_NET1_RPC_SERVER,
    mnemonic: process.env.ETH_NET1_MNEMONIC,
    accounts: process.env.ETH_NET1_ACCOUNTS
  });
}

module.exports = networks;
