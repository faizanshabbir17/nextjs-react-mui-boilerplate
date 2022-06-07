import React, { useContext } from "react";
// import { BloctoContext } from "../../providers/BloctoProvider";
import { Button, Typography, Box, useMediaQuery } from "@mui/material";
import Header from "../common/header/Header";
// import CustomSnackbar from "../common/snackbar/CustomSnackbar";
import logo from "../../assets/images/logo.svg";
import bloctoLogo from "../../assets/images/bloctoLogo.svg";
import { loginConstants, buttonConstants } from "../../utils/constants";
import Footer from "../common/footer/Footer";
import backgroundFrame from "../../assets/images/backgroundFrame.svg";
import backgroundFrameMobile from "../../assets/images/backgroundFrameMobile.svg";
import Borders from "../common/borders/Borders";
import theme from "../../theme/MuiTheme";
import loginBackground from "../../assets/images/loginBackground.svg";
import loginBackgroundMobile from "../../assets/images/loginBackgroundMobile.svg";

const Login = () => {
  //   const { login, open, error, setOpen, loading } = useContext(BloctoContext);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  //   const classes = LoginStyle();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Header />
      <Box
        position="relative"
        py={mobile ? 3.8 : ""}
        // className={classes.bg}
        component="section"
        minHeight="calc(100vh - 258px)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `url(${loginBackground.src})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          [theme.breakpoints.down("sm")]: {
            background: `url(${loginBackgroundMobile.src})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          },
        }}
      >
        {/* BACKGROUND FRAME */}
        <img
          className="backgroundFrame"
          src={mobile ? backgroundFrameMobile.src : backgroundFrame.src}
          alt="xGRunning"
        />
        <Box
          //   className={classes.bgBlack}
          position="relative"
          my={mobile ? 13 : 10}
          maxWidth={mobile ? "335px" : "491px"}
          p={mobile ? 2.5 : 5}
          m="auto"
          height={mobile ? "287px" : "auto"}
          sx={{ background: theme.Colors.black }}
        >
          {/* CARD BORDERS */}
          {/* <Borders /> */}
          <img
            // className={mobile ? classes.mw78 : classes.walletLogo}
            src={logo.src}
            alt="xGRunning"
          />
          <Typography
            variant={mobile ? "h2" : "h1"}
            className={mobile ? "mt-16" : "mt-32 lh-42"}
          >
            {loginConstants.YOUR_ACCOUNT_TEXT}
          </Typography>
          <Box minWidth={mobile ? "auto" : "415px"}>
            <Typography
              variant={mobile ? "body2" : "body1"}
              className={
                mobile ? "mt-4 family-inter clr-white" : "mt-8 family-inter"
              }
            >
              {loginConstants.SETUP_WALLET_DESC_TEXT}
            </Typography>
          </Box>
          <Box
            // className={classes.bgWhite}
            display="flex"
            alignItems="center"
            mt={mobile ? 1.8 : 2}
            py={1.5}
            px={2}
            sx={{
              background: theme.Colors.white,
            }}
          >
            <img src={bloctoLogo.src} alt="xGRunning" />
            <Box ml={1.5}>
              <Typography
                className="clr-black family-bebas lh-18"
                variant="body1"
              >
                {loginConstants.BLOCTO_TEXT}
              </Typography>
              <Typography
                variant="subtitle1"
                className="clr-grey weight-400 lh-18 family-inter"
              >
                {loginConstants.BLOCTO_DESC_TEXT}
              </Typography>
            </Box>
          </Box>
          <Button
            fullWidth
            // onClick={login}
            // disabled={loading ? true : false}
            variant="contained"
            color="primary"
            className={mobile ? `padding8 mt-32` : `padding12 mt-40`}
          >
            {buttonConstants.CONNECT_WALLET}
          </Button>
        </Box>
      </Box>
      <Footer />
      {/* <CustomSnackbar open={open} error={error} handleClose={handleClose} /> */}
    </>
  );
};
export default Login;
