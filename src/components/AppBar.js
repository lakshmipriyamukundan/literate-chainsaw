import * as React from 'react'
import {AppBar, Toolbar} from "@material-ui/core/";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import {Hidden} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';


  const useStyles = makeStyles(theme => ({
    root: {
      marginBottom: '0'
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.default,
      zIndex: theme.zIndex.drawer + 1,
    },
    gravatar: {
      width: '50px',
      height: '50px'
    },
    toolbarDiv: {
      flexGrow: 1,
      marginRight: theme.spacing(3),
      zIndex: 1400,
      alignItems:'center'
    },
    toolbarTitle: {
      '& *': {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none',
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: "16px",
        alignItems: "center",
        textAlign: "center",
        color: theme.palette.text.primary,
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0),
        color: theme.palette.text.primary,
        '& *': {
          padding: theme.spacing(0),
          color: theme.palette.text.primary,
          fontSize: "24px",
        }
      },
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    navButton: {
      border: "1px solid #80CBC4",
      borderRadius: "2px"
    },
    hamIcon: {
  
      color: theme.palette.primary.main
    },
    typography: {
      // textAlign: 'left',
      // padding: theme.spacing.unit * 2
    },
    activeStyle: {},
    menu: {
      // color: theme.palette.secondary.main,
  
      backgroundColor: theme.palette.background.default,
  
      "& *": {
        color: theme.palette.text.secondary,
        fontStyle: "bold",
        fontWeight: "bold"
        // opacity: 0.25,
      }
    },
    menuItem: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.secondary,
    }
  }));

  const navLinks = [
    { title: `00. about`, path: `/about` },
    { title: `01. experience`, path: `/experience` },
    { title: `02. education`, path: `/edu` },
    { title: `03. contact`, path: `/contact` },
    { title: `faq`, path: `/faq` }
  ];

  export default function AppHeader() {
    const classes = useStyles();
    const activeStyle = {
      fontWeight: "bold",
    };
  
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <div className={classes.toolbarDiv}>
          <Grid container direction="row" justify="space-between" alignItems="center">
          <Button href={"/"}><Avatar src="https://avatars0.githubusercontent.com/u/19326718?s=460&u=53bc6616529bcb71808afa77bfce1ff05adfc351&v=4"
                                   className={classes.gravatar}/></Button>
            <Grid item>

              <nav className={classes.toolbarTitle}>
                <Hidden xsDown>
                  <NavLink exact to="/about" activeStyle={activeStyle}>
                    01. About
                  </NavLink>
                  <NavLink to="/experience" activeStyle={activeStyle}>
                    02. Experience
                  </NavLink>
                  <NavLink to="/work" activeStyle={activeStyle}>
                    03. Work
                  </NavLink>
                  <NavLink to="/journey" activeStyle={activeStyle}>
                    04. Journey
                  </NavLink>
                  <Button variant="outlined" className={classes.navButton} href={'data.resumeUrl'} target="_blank">
                    Resume
                  </Button>
                </Hidden>
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                          className={classes.hamIcon}>
                    <MenuIcon/>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    className={classes.menu}
                  >
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/">Home</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/about">About</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/experience">Experience</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/work">Work</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component={Link} to="/journey">Journey</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.menuItem} component="a" href={'data.resumeUrl'}>Resume</MenuItem>
                  </Menu>
                </Hidden>
              </nav>

            </Grid>
          </Grid>
          {/* <Button href="#" variant="outlined">
            Login
        </Button> */}
        </div>
      </Toolbar>
    </AppBar>
    )
  };
