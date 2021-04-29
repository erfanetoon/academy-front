import { FC, ReactNode } from 'react';
import {
    unstable_createMuiStrictModeTheme as createMuiTheme,
    StylesProvider,
    ThemeProvider,
    jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';

interface ColorsInterface {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    white: string;
    black: string;
}

export let Colors: ColorsInterface = {
    primary: '#ec5252',
    secondary: '#6e1a52',
    error: '#FF5252',
    warning: '#FFC107',
    info: '#00BCD4',
    success: '#00e676',
    white: '#fff',
    black: '#000',
};

interface Children {
    children: ReactNode;
}

const Theme: FC<Children> = ({ children }) => {
    const jss = create({ plugins: [...jssPreset().plugins] });

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: Colors.primary,
                contrastText: '#fff',
            },
            secondary: {
                main: Colors.secondary,
                contrastText: '#fff',
            },
            error: {
                main: Colors.error,
                contrastText: '#fff',
            },
            warning: {
                main: Colors.warning,
                contrastText: '#fff',
            },
            info: {
                main: Colors.info,
                contrastText: '#fff',
            },
            success: {
                main: Colors.success,
                contrastText: '#fff',
            },
        },
        shape: {
            borderRadius: 16,
        },
        spacing: 4,
    });

    return (
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>{children}</StylesProvider>
        </ThemeProvider>
    );
};

export default Theme;
