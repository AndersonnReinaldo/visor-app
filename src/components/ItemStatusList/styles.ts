import styled from 'styled-components/native';
import { Dimensions }  from 'react-native'
const { width } = Dimensions.get("window")

export const ListStatus = styled.FlatList``

export const ItemContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemName = styled.Text`
  font-size: 15px;
  color: ${ props => props.theme.colorFonts};
`;

export const ContainerItem = styled.View`
  justify-content: center;
  align-items: center;
`

