import React from 'react';
import { Platform } from 'react-native';
import { ListItem, Text, Badge, Divider } from 'react-native-elements';

import networks from '../networks';
import { Content } from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Networks',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Content>
        {networks.map(network =>
          <Card title={network.name} key={network.name} >
            <Text fontFamily={Platform.OS === 'ios' ? 'Courier' : 'monospace'}>{network.rpcServer}</Text>
            <Button backgroundColor="#5388d0" title="MORE" onPress={() => navigate('Network', { network } )} />
          </Card>
        )}
      </Content>
    );
  }
}

export default HomeScreen;