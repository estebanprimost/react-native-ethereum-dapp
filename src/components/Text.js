import { Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Monospace = styled(Text).attrs({
  fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace'
})`
  font-weight: ${props => (props.bold && 'bold') || ''};
  ${props => props.small && 'font-size: 12px'};
`;
