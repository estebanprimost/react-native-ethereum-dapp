import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';

class EthNetwork {
  constructor({ rpcServer, mnemonic, accounts }) {
    const web3Provider = new HDWalletProvider(mnemonic, rpcServer, 0, accounts);
    this.web3 = new Web3(web3Provider);
  }

  getAccounts = async () => {
    return await this.web3.eth.getAccounts();
  }

  getGasPrice = async () => {
    return await this.web3.eth.getGasPrice();
  }

  getNetworkId = async () => {
    return await this.web3.eth.net.getId();
  }

  buildContract = async (jsonContract) => {


    const contract = new this.web3.eth.Contract(jsonContract.abi);
    const networkId = await this.getNetworkId();
    console.log({ s: jsonContract.networks, networkId })
    contract.options.address =
      jsonContract.networks[String(networkId)].address;

    return contract;
  }
}

export default EthNetwork;
