import { React, useContext } from "react";
import { Box, Typography, useMediaQuery, Drawer, Link } from "@mui/material";
import logo from "../../../assets/images/logo.svg";
import theme from "../../../theme/MuiTheme";
import HeaderStyle from "./HeaderStyle";
import crossIconWhite from "../../../assets/images/crossIconWhite.svg";
import { getLocalData } from "../../../utils/storage";
import logoutIcon from "../../../assets/images/logoutIcon.svg";
import { headerContants, Routes } from "../../../utils/constants";
// import { BloctoContext } from "../../../providers/BloctoProvider";

const DrawerMenuMobile = ({ open, handleDrawer, setOpen }) => {
  const classes = HeaderStyle();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const user = JSON.parse(getLocalData("user"));
  // const { logout } = useContext(BloctoContext);

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <Box px={2} py={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link href={Routes.HOME}>
              <img
                className={mobile ? classes.mw105 : classes.mw100}
                src={logo}
                alt="xGRunning"
              />
            </Link>
            <Box onClick={handleDrawer}>
              <img src={crossIconWhite} alt="xGRunning" />
            </Box>
          </Box>
          <Box
            border="1px solid"
            borderColor={theme.Colors.cyan}
            borderRadius="0px"
            mt={4}
            py={0.5}
            px={2}
          >
            <Typography className="clr-cyan" variant="body1">
              Connected:{" "}
              <Typography
                component="span"
                className="clr-white"
                variant="body1"
              >
                {user?.addr?.replace(user?.addr.substring(6, 14), "...")}
              </Typography>
            </Typography>
          </Box>
          <Box
            border="1px solid"
            borderColor={theme.Colors.cyan}
            borderRadius="0px"
            mt={0.5}
            p={2}
            // onClick={logout}
          >
            <img className="v-align mr-8" src={logoutIcon} alt="xGRunning" />
            <Typography component="span">
              {headerContants.LOGOUT_TEXT}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
export default DrawerMenuMobile;
