import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { List, ListItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundColor: theme.palette.background.default
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    display:`flex`,
    color: theme.palette.text.default
  },
  linkText: {
    color: theme.palette.text.default
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
    return (
      <AppBar position="fixed" className={classes.banner}>
        <Toolbar>

        </Toolbar>
      </AppBar>
    )
  };


//   <Typography variant="h6" className={classes.title}>
//   LM
// </Typography>
// <List component="nav" className={classes.nav} aria-label="links">
// {navLinks.map(({ title, path }) => (
//     <a href={path} key={title} className={classes.linkText}>
//       <ListItem button>
//         <Typography>{title}</Typography>
//       </ListItem>
//     </a>
// ))}
// </List>