import type { Components } from '@mui/material/styles';

// Local Font files
import InterVariableTTF from '@assets/fonts/inter/InterVariable.ttf';
import InterVariableWOFF2 from '@assets/fonts/inter/InterVariable.woff2';
import { COLORS } from '@constant';

const fontFaceDeclarations = {
    '@font-face': [
        {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '100 900',
            fontDisplay: 'swap',
            src: `
              url(${InterVariableWOFF2}) format('woff2'),
              url(${InterVariableTTF}) format('truetype');
            `,
        },
    ],
};

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            fontFaceDeclarations,
        },
    },
    MuiSvgIcon: {
        defaultProps: {
            htmlColor: COLORS.TEXT.PRIMARY,
        },
    },
};
