import { DarkTheme, DefaultTheme as LightTheme } from '@react-navigation/native';

export const navigationTheme = {
    light: {
        ...LightTheme,
        type: 'light',
        colors: {
            ...LightTheme.colors,
            primary: '#ED1C24',
            secondary: '#121621',
            accent:'#333A4F',
        },
        spacing: {
            horizontal: 15,
        },
        fontSize: {
            cardDate: 15,
            cardTitle: 20,
            cardSubTitle: 15,
            cardHeading: 30,
        },
    },
    dark: {
        ...DarkTheme,
        type: 'dark',
        colors: {
            ...DarkTheme.colors,
            primary: '#ED1C24',
            secondary: '#121621',
            accent:'#333A4F',
        },
        spacing: {
            horizontal: 15,
        },
        fontSize: {
            cardDate: 15,
            cardTitle: 20,
            cardSubTitle: 15,
            cardHeading: 30,
        },
    },
};