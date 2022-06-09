import React from 'react';
import { useColorScheme, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';
import Home from './screens/Home';
import themes from './theme';

const Index = () => { 
    //dark, light, null, undefined
    const deviceTheme = useColorScheme();

    const theme = themes[deviceTheme] || themes.dark
    
    return(
        <ThemeProvider theme={theme}>
            <StatusBar backgroundColor={theme.background}/>
            <Home/>
        </ThemeProvider>
    ) 
}

export default Index;