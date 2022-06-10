import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import { IEquipamento } from './';

export const Container = styled.View`
    flex:1;
    background-color: ${ props => props.theme.background};
    justify-content:center;
`
 export const Name = styled.Text`
    font-size:30px;
    color: ${ props => props.theme.colorFonts};
 `
 
export const UsersList = styled(FlatList as new () => FlatList<IEquipamento>)`
  padding: 20px;
`;
