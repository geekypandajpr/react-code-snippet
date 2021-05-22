import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import ExitIcon from '@material-ui/icons/ExitToApp'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/common/reducers";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  title: {
    flexGrow: 1,
    color: "#000",
  },
}));

const Header = () => {
  const classes = useStyles()
  const user_permissions = useSelector((state: RootState) => state.session.user?.permissions) ?? []
  const dispatch = useDispatch()

  return (
    <AppBar position="relative" style={{backgroundColor: 'white'}}>
      <Toolbar>
        <InfoIcon className={classes.icon} />

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Hydra Facial
        </Typography>

        <IconButton
          disabled={!user_permissions.includes('maintenance')}
        >
          <NavLink to="/console">
            <SettingsIcon />
          </NavLink>
        </IconButton>
        <NavLink to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </NavLink>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            if (window.confirm('Would you like to logout?')) dispatch({ type: 'session/logout' })
          }}
        >
          <ExitIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
