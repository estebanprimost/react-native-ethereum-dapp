import React from 'react';
import { ListItem, Text, Badge } from 'react-native-elements';

import networks from '../networks';
import { Content } from '../components/Layout';
import Card, { Divider } from '../components/Card';
import Button from '../components/Button';
import { Monospace } from '../components/Text';

import MetaCoin from '../../build/contracts/MetaCoin.json';
import EthNetwork from '../lib/eth-network';
import { ScrollView } from 'react-native';

class NetworkScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.network.name
  });

  state = {
    accounts: [],
    gasPrice: null,
    networkId: null,
    result: null
  }

  constructor(props) {
    super();
    const { navigation: { state: { params: { network } } } } = props;
    props.navigation.addListener('didFocus', payload => {
      this.ethNetwork = new EthNetwork(network);
      this.loadNetworkId();
      this.loadAccounts();
      this.loadGasPrice();
    });
  }

  loadNetworkId = async () => {
    const networkId = await this.ethNetwork.getNetworkId();
    this.setState({ networkId });
  };

  loadAccounts = async () => {
    const accounts = await this.ethNetwork.getAccounts();
    this.setState({ accounts });
  };

  loadGasPrice = async () => {
    const gasPrice = await this.ethNetwork.getGasPrice();
    this.setState({ gasPrice });
  };

  runContract = async () => {
    const contract = await this.ethNetwork.buildContract(MetaCoin);

    const result = contract.methods.sendCoin(this.state.accounts[1], 10);

    result.send({ from: this.state.accounts[0] })
      // .on('transactionHash', function(hash){
      //   console.log('transactionHash', (hash));
      // })
      .on('receipt', (receipt) => {
        this.setState({ result: JSON.stringify(receipt, null, 2) })
      })
      // .on('confirmation', function(confirmationNumber, receipt){
      //   console.log('confirmation', (confirmationNumber, receipt));
      // })
      .on('error', console.error);
  }

  render() {
    const { navigation: { navigate, state: { params: { network: { name, rpcServer } } } } } = this.props;
    const { accounts, gasPrice, networkId, result } = this.state;
    const loading = !accounts.length || !gasPrice

    return (
      <Content>

          <Card title={name}>
            <Text>RPC Server: <Monospace bold >{rpcServer}</Monospace></Text>

            <Divider />
            <Text>Network ID: <Monospace bold >{networkId || 'Loading...'}</Monospace></Text>

            <Divider />
            <Text>Accounts: <Monospace bold small>
              {accounts.length ? `(${accounts.length}) [\n  ${accounts.join('\n  ')}\n]` : 'Loading...'}
            </Monospace></Text>

            <Divider />
            <Text>Gas price: <Monospace bold >
              {gasPrice || 'Loading...'}
            </Monospace></Text>

            <Divider />
            <Button title="Run contract" onPress={this.runContract} disabled={loading} />
            {result && <Text>Result: <Monospace bold small >
              {result}
            </Monospace></Text>}

          </Card>

      </Content>
    );
  }
}

export default NetworkScreen;