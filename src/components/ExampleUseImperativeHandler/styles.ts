import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(30)}px;
  margin-top: ${RFValue(30)}px;
  background: peru;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
