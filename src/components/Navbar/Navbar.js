import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="icon" height="60" />
      </div>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">All Characters</Typography>
            <Typography component={Link} to="/saved" className={classes.heading} variant="h6" align="center">Saved</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <div className={classes.profile}>
          <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">All Characters</Typography>
          <Button component={Link} className={classes.logout} to="/auth" variant="contained" color="primary">Sign In</Button>
          </div>
        )}
      </Toolbar>

    </AppBar>
  );
};

export default Navbar;
