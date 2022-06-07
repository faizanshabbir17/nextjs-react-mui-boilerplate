import { createTheme } from "@mui/material";

const defaultTheme = createTheme();
// colors
const Colors = {
  white: "#FFFFFF",
  black: "#000000",
  lightGrey: "#939393",
  grey: "#7B7979",
  patternBlue: "#DEE2E6",
  cyan: "#98FDF1",
};
// typography
const FONT_FAMILY = {
  inter: "'Inter', sans-serif",
  bebas: "'Bebas Neue', cursive",
};
const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  black: 900,
};
const theme = createTheme({
  FONT_FAMILY,
  FONT_WEIGHT,
  Colors,
  palette: {
    primary: {
      main: `${Colors.cyan} !important`,
      light: Colors.aubergine,
    },
    secondary: {
      main: Colors.white,
      light: Colors.grey,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY.bebas,
    color: Colors.white,
    h1: {
      fontSize: "2rem", //2rem = 32px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "3rem", //3rem = 48px
      color: Colors.cyan,
    },
    h2: {
      fontSize: "1.5rem", //1.5rem = 24px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "2.25rem", //2.25 = 36px
      color: Colors.cyan,
    },
    h3: {
      fontSize: "1.25rem", //1.25rem = 20px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1.5rem", //1.5rem = 24px
      color: Colors.cyan,
    },
    body1: {
      fontSize: "1rem", //1rem = 16px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1.5rem", //1.5rem = 24px
      color: Colors.white,
    },
    body2: {
      fontSize: "0.875rem", //0.875rem = 14px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1.25rem", //1.25rem = 20px
      color: Colors.grey,
    },
    subtitle1: {
      fontSize: "0.75rem", //0.75rem = 12px
      fontWeight: FONT_WEIGHT.regular,
      lineHeight: "1rem", //1rem = 16px
      color: Colors.grey,
    },
  },
  //overrides
  overrides: {
    MuiButton: {
      root: {
        // "&:hover": {
        //   backgroundColor: `${Colors.white} !important`,
        // },
        borderRadius: "0px",
        textTransform: "uppercase",
      },
      label: {
        color: Colors.black,
        fontSize: "24px",
        fontWeight: FONT_WEIGHT.regular,
        lineHeight: "24px",
        fontFamily: FONT_FAMILY.bebas,
      },
    },
    MuiContainer: {
      root: {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
      },
      maxWidthMd: {
        maxWidth: "1048px !important",
      },
      maxWidthLg: {
        maxWidth: "1146px !important",
        // "@media(min-width:900px) and (max-width:1200px)": {
        //   maxWidth: "900px !important",
        // },
      },
      maxWidthXl: {
        maxWidth: "1440px !important",
      },
      // maxWidthSm: {
      //   maxWidth: "700px !important",
      // },
      maxWidthXs: {
        maxWidth: "343px !important",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#000000",
        minWidth: "247px",
      },
      elevation4: {
        boxShadow: "none",
      },
    },
    MuiAppBar: {
      root: {
        maxWidth: "428px",
        margin: "auto",
        [defaultTheme.breakpoints.down("xs")]: {
          maxWidth: "240px !important",
        },
      },
      colorPrimary: {
        backgroundColor: "transparent",
      },
    },
    MuiTab: {
      root: {
        minWidth: "214px !important",
        minHeight: "37px",
        padding: "0px",
        [defaultTheme.breakpoints.down("xs")]: {
          minWidth: "120px !important",
        },
      },
      textColorInherit: {
        color: Colors.white,
        opacity: "1",
        fontSize: "32px",
        lineHeight: "32px",
        fontWeight: "400",
        [defaultTheme.breakpoints.down("xs")]: {
          fontSize: "20px",
          lineHeight: "30px",
        },
        "&.Mui-selected": {
          color: Colors.cyan,
        },
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: Colors.cyan,
        height: "3px",
        zIndex: "2",
      },
      root: {
        position: "relative",
        minHeight: "37px",
        "&::after": {
          content: "''",
          position: "absolute",
          background: Colors.white,
          width: "100%",
          height: "1px",
          bottom: "0",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: Colors.cyan,
      },
    },
    MuiSnackbar: {
      root: {
        left: "0",
        right: "0",
      },
    },
    // MuiInput: {
    //   underline: {
    //     "&::after": {
    //       borderBottom: "none",
    //     },
    //   },
    // },
    MuiSkeleton: {
      root: {
        backgroundColor: "rgba(255, 255, 255, 0.11)",
      },
    },
  },
});
export default theme;
