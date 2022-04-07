import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: ${RFValue(30)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
