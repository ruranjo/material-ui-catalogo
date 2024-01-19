import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element,
}

export enum themePaletteConfig{
    PRIMARY_BLUE = "#004AC1",
    PRIMARY_YELLOW = "#FFD300",
    LIME = "#000000",
    FONT_GLOBAL= "'JetBrains Mono', monospace",
    
    //alert styles
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.1)",

    //alert success
    SUCCESS_MAIN = "#4bb543",
    BG_SUCCESS_MAIN = "rgba(34,187,51,0.1)",
}

const theme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main: themePaletteConfig.PRIMARY_BLUE
        },
        secondary:{
            main: themePaletteConfig.PRIMARY_YELLOW
        },
        text:{
            primary: themePaletteConfig.LIME
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                }
            }
        },
    }
});

/*
palette:{
        mode:"dark",
        
        background:{
            default: themePaletteConfig.BG,
        },
        primary:{
            main: themePaletteConfig.LIME
        },
        text:{
            primary: themePaletteConfig.LIME
        }
    },
    typography:{
        fontFamily: themePaletteConfig.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"20em",
                }
            }
        },
    }
*/


export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
} 