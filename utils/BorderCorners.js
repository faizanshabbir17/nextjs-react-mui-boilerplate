import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import rectangle1 from "../assets/images/rectangle1.svg";
import rectangle1Mobile from "../assets/images/rectangle1Mobile.svg";
import rectangle2 from "../assets/images/rectangle2.svg";
import rectangle2Mobile from "../assets/images/rectangle2Mobile.svg";
import rectangle3 from "../assets/images/rectangle3.svg";
import rectangle3Mobile from "../assets/images/rectangle3Mobile.svg";
import rectangle4 from "../assets/images/rectangle4.svg";
import rectangle4Mobile from "../assets/images/rectangle4Mobile.svg";
import topLeftBorder from "../assets/images/topLeftBorder.svg";
import topLeftBorderMobile from "../assets/images/topLeftBorderMobile.svg";
import topRightBorder from "../assets/images/topRightBorder.svg";
import topRightBorderMobile from "../assets/images/topRightBorderMobile.svg";
import bottomLeftBorder from "../assets/images/bottomLeftBorder.svg";
import bottomLeftBorderMobile from "../assets/images/bottomLeftBorderMobile.svg";
import bottomRightBorder from "../assets/images/bottomRightBorder.svg";
import bottomRightBorderMobile from "../assets/images/bottomRightBorderMobile.svg";
import theme from "../theme/MuiTheme";

const useStyles = makeStyles(() => ({
  topLeftBorder: {
    position: "absolute",
    zIndex: "-1",
    top: "-8px",
    left: "-8px",
    [theme.breakpoints.down("xs")]: {
      top: "-4px",
      left: "-4px",
    },
  },
  bottomLeftBorder: {
    position: "absolute",
    zIndex: "-1",
    bottom: "-8px",
    left: "-8px",
    [theme.breakpoints.down("xs")]: {
      bottom: "-4px",
      left: "-4px",
    },
  },
  topRightBorder: {
    position: "absolute",
    zIndex: "-1",
    top: "-8px",
    right: "-8px",
    [theme.breakpoints.down("xs")]: {
      top: "-4px",
      right: "-4px",
    },
  },
  bottomRightBorder: {
    position: "absolute",
    zIndex: "-1",
    bottom: "-8px",
    right: "-8px",
    [theme.breakpoints.down("xs")]: {
      bottom: "-4px",
      right: "-4px",
    },
  },
}));

export const TopLeftBorder = ({ component }) => {
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {/* top left border */}

      {component === "home" ? (
        <img
          className={classes.topLeftBorder}
          src={topLeftBorder}
          alt="xGRunning"
        />
      ) : component === "hero" ? (
        <img
          className={classes.topLeftBorder}
          src={mobile ? topLeftBorderMobile : rectangle1}
          alt="xGRunning"
        />
      ) : (
        <img
          className={classes.topLeftBorder}
          src={mobile ? rectangle1Mobile : rectangle1}
          alt="xGRunning"
        />
      )}
    </>
  );
};

export const BottomLeftBorder = ({ component }) => {
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {/* bottom left border */}
      {component === "home" ? (
        <>
          <img
            className={classes.bottomLeftBorder}
            src={bottomLeftBorder}
            alt="xGRunning"
          />
        </>
      ) : component === "hero" ? (
        <img
          className={classes.bottomLeftBorder}
          src={mobile ? bottomLeftBorderMobile : rectangle2}
          alt="xGRunning"
        />
      ) : (
        <>
          <img
            className={classes.bottomLeftBorder}
            src={mobile ? rectangle2Mobile : rectangle2}
            alt="xGRunning"
          />
        </>
      )}
    </>
  );
};

export const TopRightBorder = ({ component }) => {
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {/* top right border */}
      {component === "home" ? (
        <img
          className={classes.topRightBorder}
          src={topRightBorder}
          alt="xGRunning"
        />
      ) : component === "hero" ? (
        <img
          className={classes.topRightBorder}
          src={mobile ? topRightBorderMobile : rectangle3}
          alt="xGRunning"
        />
      ) : (
        <img
          className={classes.topRightBorder}
          src={mobile ? rectangle3Mobile : rectangle3}
          alt="xGRunning"
        />
      )}
    </>
  );
};

export const BottomRightBorder = ({ component }) => {
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {/* bottom right border */}
      {component === "home" ? (
        <img
          className={classes.bottomRightBorder}
          src={bottomRightBorder}
          alt="xGRunning"
        />
      ) : component === "hero" ? (
        <img
          className={classes.bottomRightBorder}
          src={mobile ? bottomRightBorderMobile : rectangle4}
          alt="xGRunning"
        />
      ) : (
        <img
          className={classes.bottomRightBorder}
          src={mobile ? rectangle4Mobile : rectangle4}
          alt="xGRunning"
        />
      )}
    </>
  );
};
