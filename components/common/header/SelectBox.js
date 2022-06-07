import { React, useContext } from "react";
import { Select, MenuItem, Box } from "@mui/material";
import HeaderStyle from "./HeaderStyle";
// import { BloctoContext } from "../../../providers/BloctoProvider";
import logoutIcon from "../../../assets/images/logoutIcon.svg";
import { getLocalData } from "../../../utils/storage";
import { headerContants } from "../../../utils/constants";

const Placeholder = ({ children }) => {
  return <>{children}</>;
};

const SelectBox = () => {
  const classes = HeaderStyle();
  // const { logout } = useContext(BloctoContext);
  const user = JSON.parse(getLocalData("user"));
  return (
    <>
      <Box display="flex" alignItems="center">
        <Select
          value={`logout`}
          className={classes.btns}
          classes={{
            iconOpen: classes.iconOpen,
          }}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
            className: classes.menu,
          }}
          IconComponent={() => {
            <></>;
          }}
          renderValue={() => (
            <Placeholder>
              {headerContants.CONNECTED_TEXT}{" "}
              <Box component="span" className="clr-white">
                {user?.addr?.replace(user?.addr.substring(6, 14), "...")}
              </Box>
            </Placeholder>
          )}
        >
          <MenuItem
            //  onClick={logout}
            value={"logout"}
          >
            <Box component="span">
              <img className="v-align mr-8" src={logoutIcon} alt="xGRunning" />
            </Box>
            {headerContants.LOGOUT_TEXT}
          </MenuItem>
        </Select>
      </Box>
    </>
  );
};
export default SelectBox;
