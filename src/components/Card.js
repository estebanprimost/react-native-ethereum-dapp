import { Card, Divider as ElementsDivider } from 'react-native-elements';
import styled from 'styled-components/native';

export default styled(Card).attrs({
  containerStyle: {
    width: '100%'
  }
})`
  width: 100%;
`;

export const Divider = styled(ElementsDivider)`
  margin-top: 5px;
  margin-bottom: 5px;
`;
