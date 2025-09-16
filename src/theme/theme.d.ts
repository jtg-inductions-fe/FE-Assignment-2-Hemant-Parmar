export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
    }
}

//To extend Theme for custom drawer widths
export declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      drawerWidth: {
        mobile: number;
        desktop: number;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      drawerWidth?: {
        mobile?: number;
        desktop?: number;
      };
    };
  }
}