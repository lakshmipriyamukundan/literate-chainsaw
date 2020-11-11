import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {List, makeStyles} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import SvgIcon from "@material-ui/core/SvgIcon";


const useStyles = makeStyles(theme => ({
  drawer: {

    width: theme.spacing(12) + 1,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    background: theme.palette.background.default,
    overflow: 'hidden',
    borderRight: `1px solid ${theme.palette.divider}`,
    boxShadow: "0px 5.5px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

  },
  gravatar: {
    width: '65px',
    height: '65px'
  },
  drawerList: {
    '& *': {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize:'1.3rem'
    },
  },
}));

function AppDrawer(props) {

  const data = {
    "drawerButtons": [
      {
        "iconName": "linkedIn",
        "svgPath": "M22.7189 20.9902H18.77V15.2747C18.77 13.9117 18.74 12.1577 16.7122 12.1577C14.6533 12.1577 14.3389 13.6408 14.3389 15.1741V20.9902H10.39V9.23684H14.1833V10.8389H14.2344C14.7644 9.91524 16.0533 8.94024 17.9789 8.94024C21.98 8.94024 22.72 11.3726 22.72 14.5388V20.9902H22.7189ZM5.93 7.62861C4.65889 7.62861 3.63778 6.67824 3.63778 5.50926C3.63778 4.34132 4.66 3.39197 5.93 3.39197C7.19667 3.39197 8.22333 4.34132 8.22333 5.50926C8.22333 6.67824 7.19556 7.62861 5.93 7.62861ZM7.91 20.9902H3.95V9.23684H7.91V20.9902ZM24.6944 0H1.96778C0.88 0 0 0.794368 0 1.7745V22.8571C0 23.8382 0.88 24.6316 1.96778 24.6316H24.6911C25.7778 24.6316 26.6667 23.8382 26.6667 22.8571V1.7745C26.6667 0.794368 25.7778 0 24.6911 0H24.6944Z",
        "link": "https://www.linkedin.com/in/"
      },
      {
        "iconName": "github",
        "svgPath": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
        "link": "https://www.github.com/"
      },
      {
        "iconName": "medium",
        "svgPath": "M22.7189 20.9902H18.77V15.2747C18.77 13.9117 18.74 12.1577 16.7122 12.1577C14.6533 12.1577 14.3389 13.6408 14.3389 15.1741V20.9902H10.39V9.23684H14.1833V10.8389H14.2344C14.7644 9.91524 16.0533 8.94024 17.9789 8.94024C21.98 8.94024 22.72 11.3726 22.72 14.5388V20.9902H22.7189ZM5.93 7.62861C4.65889 7.62861 3.63778 6.67824 3.63778 5.50926C3.63778 4.34132 4.66 3.39197 5.93 3.39197C7.19667 3.39197 8.22333 4.34132 8.22333 5.50926C8.22333 6.67824 7.19556 7.62861 5.93 7.62861ZM7.91 20.9902H3.95V9.23684H7.91V20.9902ZM24.6944 0H1.96778C0.88 0 0 0.794368 0 1.7745V22.8571C0 23.8382 0.88 24.6316 1.96778 24.6316H24.6911C25.7778 24.6316 26.6667 23.8382 26.6667 22.8571V1.7745C26.6667 0.794368 25.7778 0 24.6911 0H24.6944Z",
        "link": "https://medium.com/@nimit95"
      },
      {
        "iconName": "twitter",
        "svgPath": "M22.7189 20.9902H18.77V15.2747C18.77 13.9117 18.74 12.1577 16.7122 12.1577C14.6533 12.1577 14.3389 13.6408 14.3389 15.1741V20.9902H10.39V9.23684H14.1833V10.8389H14.2344C14.7644 9.91524 16.0533 8.94024 17.9789 8.94024C21.98 8.94024 22.72 11.3726 22.72 14.5388V20.9902H22.7189ZM5.93 7.62861C4.65889 7.62861 3.63778 6.67824 3.63778 5.50926C3.63778 4.34132 4.66 3.39197 5.93 3.39197C7.19667 3.39197 8.22333 4.34132 8.22333 5.50926C8.22333 6.67824 7.19556 7.62861 5.93 7.62861ZM7.91 20.9902H3.95V9.23684H7.91V20.9902ZM24.6944 0H1.96778C0.88 0 0 0.794368 0 1.7745V22.8571C0 23.8382 0.88 24.6316 1.96778 24.6316H24.6911C25.7778 24.6316 26.6667 23.8382 26.6667 22.8571V1.7745C26.6667 0.794368 25.7778 0 24.6911 0H24.6944Z",
        "link": "https://twitter.com/nimit95"
      },
      {
        "iconName": "instagram",
        "link": "https://www.instagram.com"
      }
    ],
  };

  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawer
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{minHeight: '90vh'}}>

        <Button href={"/"}><Avatar src="https://avatars0.githubusercontent.com/u/19326718?s=460&u=53bc6616529bcb71808afa77bfce1ff05adfc351&v=4"
                                   className={classes.gravatar}/></Button>
        <Divider/>

        <List className={classes.drawerList}>
          {data["drawerButtons"].map((drawerBtn, index) => (
            <ListItem button key={drawerBtn.iconName} component="a" target="_blank" href={drawerBtn.link}>
              {drawerBtn.iconName === 'instagram' ?
                <InstagramIcon style={{color: "#ffffff"}} /> :
                <SvgIcon >
                  <path d={drawerBtn.svgPath} fill="#ffffff"/>
                </SvgIcon>}

            </ListItem>
          ))}
          <ListItem button key={"emial"} component="a" href={`mailto:${data.email}?Subject=Hello`} target="_top">
            <EmailIcon style={{color: "#ffffff"}} />
          </ListItem>
        </List>


      </Grid>
      {/* <footer className={classes.footer}><a href="https://github.com/Personal-Website" target="_blank"
                                            rel="nofollow noopener noreferrer">
        <div>Designed &<br/> Built with ❤️ <br/>by <br/>Nimit</div>
      </a></footer> */}
    </Drawer>
  );
}

export default AppDrawer;