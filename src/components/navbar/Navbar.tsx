import React, { useState } from 'react';
import './Navbar.css';
import {
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  Container,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useLocation, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const findIndexOfSlashOrGiveLength = (arr: string[]) => {
  const indexOfSlash = arr.indexOf('/');
  if (indexOfSlash > 0) {
    return indexOfSlash;
  }
  return arr.length;
};

const getTitleFromPathname = (pathname: string) => {
  const arrayWithoutFirstSlash = pathname.split('').slice(1);
  const titleWithoutCapitalization = arrayWithoutFirstSlash
    .slice(0, findIndexOfSlashOrGiveLength(arrayWithoutFirstSlash))
    .map((char) => (char === '-' ? ' ' : char))
    .join('');
  return capitalizeFirstLetter(titleWithoutCapitalization);
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const classes = useStyles();
  const location = useLocation();

  const handleOpenMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const menuElement = (
    <Menu
      id="Navbar-menu"
      open={Boolean(anchorEl)}
      keepMounted
      anchorEl={anchorEl}
      onClose={handleCloseMenu}
    >
      <MenuItem onClick={handleCloseMenu}>
        <NavLink
          activeClassName="Navbar-menu-link__active"
          className="Navbar-menu-link"
          to="/home-screen"
        >
          Home Screen
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        <NavLink
          activeClassName="Navbar-menu-link__active"
          className="Navbar-menu-link"
          to="/new-set"
        >
          New Set
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleOpenMenu}
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon color="inherit" />
            </IconButton>
            {menuElement}
            <Typography variant="h6" className={classes.title}>
              {getTitleFromPathname(location.pathname)}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
