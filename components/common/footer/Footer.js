import { React } from "react";
import { Box, Container, Link, Typography, useMediaQuery } from "@mui/material";
import logo from "../../../assets/images/logo.svg";
import { makeStyles } from "@mui/styles";
import theme from "../../../theme/MuiTheme";
import footerBackground from "../../../assets/images/footerBackground.svg";
import footerBackgroundMobile from "../../../assets/images/footerBackgroundMobile.svg";
import footerBackgroundFrame from "../../../assets/images/footerBackgroundFrame.svg";
import footerBackgroundFrameMobile from "../../../assets/images/footerBackgroundFrameMobile.svg";
import { footerContants } from "../../../utils/constants";
import Image from "next/image";

const useStyles = makeStyles({
  topBorder: {
    borderTop: "1px solid",
    borderColor: theme.Colors.cyan,
    background: `url(${footerBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    [theme.breakpoints.down("xs")]: {
      background: `url(${footerBackgroundMobile})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top right",
    },
  },
  footerBackgroundFrame: {
    position: "absolute",
    right: "0",
  },
  mw100: {
    maxWidth: "100%",
    height: "auto",
  },
  mw78: {
    maxWidth: "78px",
    height: "auto",
  },
});

const Footer = () => {
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const tab = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        // className={classes.topBorder}
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: theme.Colors.cyan,
          background: `url(${footerBackground.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          [theme.breakpoints.down("xs")]: {
            background: `url(${footerBackgroundMobile.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
          },
        }}
      >
        <img
          className="footerBackgroundFrame"
          src={
            mobile ? footerBackgroundFrameMobile.src : footerBackgroundFrame.src
          }
          alt="xGRunning"
          // width={172}
          // height={126}
        />
        <Container maxWidth={mobile ? "xs" : tab ? "sm" : "lg"}>
          <Box pt={mobile ? 2.5 : 3} pb={mobile ? 6 : 4}>
            <Link href="/">
              <Image
                // className={mobile ? classes.mw78 : classes.mw100}
                src={logo}
                alt="xGRunning"
              />
            </Link>
            <Typography
              className={
                mobile
                  ? "clr-pattern-blue mt-12 weight-400 family-bebas"
                  : "clr-pattern-blue mt-24 weight-400 family-bebas"
              }
              variant="subtitle1"
            >
              {footerContants.COPYRIGHT_TEXT}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Footer;
