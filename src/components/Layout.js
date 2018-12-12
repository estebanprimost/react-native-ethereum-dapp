import styled from 'styled-components/native';

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})`
  flex: 1;
  padding: 16px;
  background-color: #f5fcff;
`;
