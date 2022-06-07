import { makeStyles } from "@mui/styles";
import theme from "../../../theme/MuiTheme";

const HeaderStyle = makeStyles({
  bottomBorder: {
    borderColor: `${theme.Colors.cyan} !important`,
    borderBottom: "1px solid",
  },
  collectionTab: {
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%)",
  },
  btns: {
    background: "transparent",
    minHeight: "32px",
    minWidth: "167px",
    border: "1px solid",
    borderColor: theme.Colors.cyan,
    "&.MuiButton-root": {
      "&:hover": {
        background: "#787AFF",
      },
    },
    "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
      border: "none",
    },
    "&.MuiInput-underline:before": {
      border: "none",
    },
    "&.MuiInput-underline:after": {
      border: "none !important",
    },
    "& .MuiSelect-select:focus": {
      background: "none",
    },
    "@media(max-width:767px)": {
      position: "fixed",
      bottom: 0,
      width: "100%",
      left: 0,
      zIndex: 1201,
    },
    "& .MuiSelect-icon": {
      color: theme.Colors.black,
      paddingRight: "6px",
    },
    "& .MuiInputBase-input": {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
      color: theme.Colors.cyan,
      padding: "4px 16px",
    },
  },
  menu: {
    "& .MuiList-padding": {
      padding: "0px",
    },
    "& .MuiPaper-elevation8": {
      border: "1px solid",
      borderColor: theme.Colors.cyan,
      marginTop: "4px",
      borderRadius: "0px",
    },
    "& .MuiMenuItem-root": {
      color: theme.Colors.cyan,
      padding: "16px",
    },
    "& .MuiListItem-button:hover": {
      backgroundColor: theme.Colors.black,
    },
    "& .MuiListItem-button": {
      backgroundColor: theme.Colors.black,
    },
  },
  iconOpen: {
    transform: "rotate(0deg)",
  },
  listItem: {
    "& .MuiListItem-root": {
      color: theme.Colors.cyan,
      textTransform: "uppercase",
      fontFamily: "'Bebas Neue', cursive",
    },
    // position: "absolute",
    // height: "100%",
    // display: "flex",
    // left: "52%",
    // bottom: "-1px",
    // padding: "0px",
    // background:
    //   "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%)",
  },
  mw100: {
    maxWidth: "100%",
    height: "auto",
  },
  mw105: {
    maxWidth: "105px",
    height: "auto",
  },
});

export default HeaderStyle;
