import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

export default styled(Button).attrs({
  raised: true,
  // rounded: true,
  fontWeight: 'bold',
  fontSize: 16,
  containerViewStyle: {
    backgroundColor: 'transparent',
    margin: 15
  }
})`
  border-radius: 15px;
`;
