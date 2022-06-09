import styled from 'styled-components';

const Container = styled.View`
    flex:1;
    background-color: ${ props => props.theme.background};
    justify-content:center;
    align-items:center;
`
 const Name = styled.Text`
    font-size:30px;
    color: ${ props => props.theme.colorFonts};
 `

 export {
     Container,
     Name
 }