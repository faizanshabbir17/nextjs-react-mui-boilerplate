import { React, useState } from "react";
import { Box, Container, Link, useMediaQuery } from "@mui/material";
import logo from "../../../assets/images/logo.svg";
import theme from "../../../theme/MuiTheme";
import SelectBox from "./SelectBox";
import HeaderStyle from "./HeaderStyle";
import { Routes } from "../../../utils/constants";
import menuIcon from "../../../assets/images/menuIcon.svg";
import DrawerMenuMobile from "./DrawerMenuMobile";
import Image from "next/image";

const Header = ({ page }) => {
  const classes = HeaderStyle();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
  const tab = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box component="header">
        <Container maxWidth={mobile ? "xs" : tab ? "sm" : "lg"}>
          <Box
            // className={classes.bottomBorder}
            position="relative"
            display="flex"
            alignItems="center"
            py={2.5}
            pb={mobile ? 0.9 : 2.5}
            sx={{
              borderColor: `${theme.Colors.cyan} !important`,
              borderBottom: "1px solid",
            }}
          >
            <Box display="flex" flexGrow="1">
              <Link href={page === "home" ? Routes.HOME : Routes.LOGIN}>
                <Image
                  className={mobile ? classes.mw105 : classes.mw100}
                  src={logo}
                  alt="xGRunning"
                />
              </Link>
            </Box>
            {page === "home" && (
              <>
                {tab ? (
                  <>
                    <Box onClick={handleDrawer}>
                      <Image src={menuIcon} alt="xGRunning" />
                    </Box>
                    <DrawerMenuMobile
                      open={open}
                      handleDrawer={handleDrawer}
                      setOpen={setOpen}
                    />
                  </>
                ) : (
                  <>
                    <SelectBox />
                  </>
                )}
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Header;
